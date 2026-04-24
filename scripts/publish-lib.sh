# bash scripts/publish-lib.sh origin v1.0.0

#!/usr/bin/env bash
set -euo pipefail

REMOTE="${1:-origin}"
BRANCH="${2:-release}"
DIST_DIR="dist/ui-kit"
LIB_PKG="projects/ui-kit/package.json"

# ── 1. Build ──────────────────────────────────────────────────────────────────
echo "▶ Building ui-kit..."
npm run build:lib

# ── 2. Read version for the commit message ────────────────────────────────────
VERSION=$(node -p "require('./${LIB_PKG}').version" 2>/dev/null || echo "")
SOURCE_COMMIT=$(git rev-parse --short HEAD)
COMMIT_MSG="release${VERSION:+: v${VERSION}} (${SOURCE_COMMIT})"

# ── 3. Create a temp orphan worktree (never touches master / gitignore) ───────
TMP_BRANCH="__publish_tmp_$$"
TMP_DIR=$(mktemp -d)

# Ensure cleanup on exit whether we succeed or fail
cleanup() {
  git worktree remove --force "${TMP_DIR}" 2>/dev/null || true
  git branch -D "${TMP_BRANCH}"            2>/dev/null || true
  rm -rf "${TMP_DIR}"
}
trap cleanup EXIT

echo "▶ Pushing ${DIST_DIR}/ → ${REMOTE}/${BRANCH}..."

git worktree add --orphan -b "${TMP_BRANCH}" "${TMP_DIR}"

# Copy built output into the worktree (dist is gitignored on master — that's fine)
cp -r "${DIST_DIR}/." "${TMP_DIR}/"

# Write a small build-info file for traceability
cat > "${TMP_DIR}/BUILD" <<EOF
source-commit: ${SOURCE_COMMIT}
built-at: $(date -u +"%Y-%m-%dT%H:%M:%SZ")
EOF

pushd "${TMP_DIR}" > /dev/null
  git add --all
  git commit -m "${COMMIT_MSG}"
  git push "${REMOTE}" "HEAD:refs/heads/${BRANCH}" --force
popd > /dev/null

echo ""
echo "✔ Published to '${REMOTE}/${BRANCH}'"
echo "  Install with:"
echo "  npm install git+<repo-url>#${BRANCH}"


# bash scripts/publish-lib.sh origin v1.0.0