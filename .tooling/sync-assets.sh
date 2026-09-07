#!/usr/bin/env bash
# Sync the local docs-assets/ mirror to/from the Macrostrat documentation asset store.
#
#   ./sync-assets.sh push     # local docs-assets/ -> bucket
#   ./sync-assets.sh pull     # bucket -> local docs-assets/
#
# Requires the AWS CLI (or swap for rclone) configured with credentials scoped to
# the `assets` bucket on storage.macrostrat.org (Ceph RGW, S3-compatible); docs media lives under web/docs/.
set -euo pipefail

# --- config (override via environment) -------------------------------------
: "${DOCS_ASSETS_ENDPOINT:=https://storage.macrostrat.org}"
: "${DOCS_ASSETS_BUCKET:=s3://assets/web/docs}"

here="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
local_dir="$here/docs-assets"

cmd="${1:-}"
aws_common=(--endpoint-url "$DOCS_ASSETS_ENDPOINT")

case "$cmd" in
  push)
    echo "[sync] $local_dir -> $DOCS_ASSETS_BUCKET"
    aws "${aws_common[@]}" s3 sync "$local_dir" "$DOCS_ASSETS_BUCKET" \
      --exclude "README.md" --exclude ".gitkeep"
    ;;
  pull)
    echo "[sync] $DOCS_ASSETS_BUCKET -> $local_dir"
    aws "${aws_common[@]}" s3 sync "$DOCS_ASSETS_BUCKET" "$local_dir"
    ;;
  *)
    echo "usage: $0 {push|pull}" >&2
    exit 2
    ;;
esac
