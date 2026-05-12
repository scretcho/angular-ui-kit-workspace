import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ChartType = 'bar' | 'line' | 'donut' | 'pie';

export interface ChartDataset {
  label: string;
  data: number[];
  color?: string;
}

export interface ChartConfig {
  type: ChartType;
  labels: string[];
  datasets: ChartDataset[];
  height?: number;
}

const COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4', '#ec4899', '#8b5cf6', '#14b8a6'];

const W = 560, H = 260;
const PAD = { top: 20, right: 20, bottom: 44, left: 52 };
const IW = W - PAD.left - PAD.right;
const IH = H - PAD.top - PAD.bottom;

function niceMax(val: number): number {
  if (val === 0) return 10;
  const exp = Math.pow(10, Math.floor(Math.log10(val)));
  return Math.ceil(val / exp) * exp;
}

function yTicks(max: number, count = 5) {
  return Array.from({ length: count + 1 }, (_, i) => ({
    value: Math.round((max * i) / count),
    y: PAD.top + IH - (i / count) * IH,
  }));
}

export interface BarRect { x: number; y: number; w: number; h: number; color: string; label: string; value: number; }
export interface LinePoint { x: number; y: number; }
export interface LineSeries { points: LinePoint[]; polyline: string; fill: string; color: string; label: string; }
export interface DonutSegment { d: string; color: string; label: string; value: number; pct: number; }
export interface ChartTick { value: number; y: number; }
export interface ChartXLabel { x: number; text: string; }

export interface BarChartData {
  bars: BarRect[];
  xLabels: ChartXLabel[];
  ticks: ChartTick[];
  legend: { color: string; label: string }[];
  W: number; H: number;
}

export interface LineChartData {
  series: LineSeries[];
  xLabels: ChartXLabel[];
  ticks: ChartTick[];
  legend: { color: string; label: string }[];
  W: number; H: number;
}

export interface DonutChartData {
  segments: DonutSegment[];
  legend: { color: string; label: string; value: number; pct: number }[];
  cx: number; cy: number; R: number; r: number;
  VW: number; VH: number;
  isEmpty: boolean;
}

@Component({
  selector: 'uk-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkChartComponent implements OnChanges {
  @Input({ required: true }) config!: ChartConfig;

  barData!: BarChartData;
  lineData!: LineChartData;
  donutData!: DonutChartData;

  ngOnChanges(): void {
    if (!this.config) return;
    if (this.config.type === 'bar') this.barData = this.buildBarData();
    else if (this.config.type === 'line') this.lineData = this.buildLineData();
    else this.donutData = this.buildDonutData();
  }

  private buildBarData(): BarChartData {
    const { labels, datasets } = this.config;
    const allVals = datasets.flatMap(d => d.data);
    const max = niceMax(Math.max(...allVals, 0));
    const ticks = yTicks(max);

    const groupW = IW / Math.max(labels.length, 1);
    const totalBarW = groupW * 0.72;
    const barW = totalBarW / Math.max(datasets.length, 1);

    const bars: BarRect[] = [];
    datasets.forEach((ds, di) => {
      ds.data.forEach((val, li) => {
        const bh = max > 0 ? (val / max) * IH : 0;
        bars.push({
          x: PAD.left + li * groupW + (groupW - totalBarW) / 2 + di * barW,
          y: PAD.top + IH - bh,
          w: barW - 2,
          h: bh,
          color: ds.color ?? COLORS[di % COLORS.length],
          label: ds.label,
          value: val,
        });
      });
    });

    const xLabels: ChartXLabel[] = labels.map((text, i) => ({
      x: PAD.left + i * groupW + groupW / 2,
      text,
    }));

    const legend = datasets.map((ds, i) => ({
      color: ds.color ?? COLORS[i % COLORS.length],
      label: ds.label,
    }));

    return { bars, xLabels, ticks, legend, W, H };
  }

  private buildLineData(): LineChartData {
    const { labels, datasets } = this.config;
    const allVals = datasets.flatMap(d => d.data);
    const max = niceMax(Math.max(...allVals, 0));
    const ticks = yTicks(max);

    const n = Math.max(labels.length, 2);
    const xStep = IW / (n - 1);

    const series: LineSeries[] = datasets.map((ds, di) => {
      const color = ds.color ?? COLORS[di % COLORS.length];
      const pts = ds.data.map((val, i) => ({
        x: PAD.left + i * xStep,
        y: PAD.top + IH - (max > 0 ? (val / max) * IH : 0),
      }));
      const polyline = pts.map(p => `${p.x},${p.y}`).join(' ');
      const fill = pts.length > 0
        ? `${polyline} ${PAD.left + (pts.length - 1) * xStep},${PAD.top + IH} ${PAD.left},${PAD.top + IH}`
        : '';
      return { points: pts, polyline, fill, color, label: ds.label };
    });

    const xLabels: ChartXLabel[] = labels.map((text, i) => ({
      x: PAD.left + i * xStep,
      text,
    }));

    const legend = datasets.map((ds, i) => ({
      color: ds.color ?? COLORS[i % COLORS.length],
      label: ds.label,
    }));

    return { series, xLabels, ticks, legend, W, H };
  }

  private buildDonutData(): DonutChartData {
    const { labels, datasets, type } = this.config;
    const data = datasets[0]?.data ?? [];
    const total = data.reduce((a, b) => a + b, 0);
    const VW = 320, VH = 280;
    const cx = 140, cy = 130;
    const R = 110, r = type === 'donut' ? 60 : 0;

    if (total === 0) {
      return { segments: [], legend: [], cx, cy, R, r, VW, VH, isEmpty: true };
    }

    let angle = -Math.PI / 2;
    const segments: DonutSegment[] = data.map((val, i) => {
      const sweep = (val / total) * 2 * Math.PI;
      const endAngle = angle + sweep;
      const cos1 = Math.cos(angle), sin1 = Math.sin(angle);
      const cos2 = Math.cos(endAngle), sin2 = Math.sin(endAngle);
      const large = sweep > Math.PI ? 1 : 0;
      const color = COLORS[i % COLORS.length];
      const pct = Math.round((val / total) * 100);

      let d: string;
      if (r > 0) {
        d = [
          `M ${cx + R * cos1} ${cy + R * sin1}`,
          `A ${R} ${R} 0 ${large} 1 ${cx + R * cos2} ${cy + R * sin2}`,
          `L ${cx + r * cos2} ${cy + r * sin2}`,
          `A ${r} ${r} 0 ${large} 0 ${cx + r * cos1} ${cy + r * sin1}`,
          'Z',
        ].join(' ');
      } else {
        d = [
          `M ${cx} ${cy}`,
          `L ${cx + R * cos1} ${cy + R * sin1}`,
          `A ${R} ${R} 0 ${large} 1 ${cx + R * cos2} ${cy + R * sin2}`,
          'Z',
        ].join(' ');
      }

      angle = endAngle;
      return { d, color, label: labels[i] ?? `Item ${i + 1}`, value: val, pct };
    });

    const legend = segments.map(s => ({ color: s.color, label: s.label, value: s.value, pct: s.pct }));
    return { segments, legend, cx, cy, R, r, VW, VH, isEmpty: false };
  }
}
