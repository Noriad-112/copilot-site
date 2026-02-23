# Photo Pipeline Session Handoff (Framework) - 2026-02-23

## Scope
This note captures the practical work completed on the Framework laptop for the iPhone -> Framework -> NAS pipeline, including automation and operational fixes.

## Completed outcomes
- Created local pipeline directories:
  - `/home/basecamp_noriad/media/photos/incoming`
  - `/home/basecamp_noriad/tools/scripts`
  - `/home/basecamp_noriad/tools/logs`
- Installed and validated core scripts:
  - `/home/basecamp_noriad/tools/scripts/photo-archive.sh`
  - `/home/basecamp_noriad/tools/scripts/iphone-import-retry.sh`
  - `/home/basecamp_noriad/tools/scripts/iphone-photo-pipeline-on-connect.sh`
  - `/home/basecamp_noriad/tools/scripts/install-iphone-usb-automation.sh`
  - `/home/basecamp_noriad/tools/scripts/dedupe-import-against-library.sh`
  - `/home/basecamp_noriad/tools/scripts/ingest-photoslibrary-to-pipeline.sh`
  - `/home/basecamp_noriad/tools/scripts/setup-digikam-photo-pipeline.sh`
  - `/home/basecamp_noriad/tools/scripts/fix-nas-mount.sh`
- USB-trigger automation is narrowed to one known iPhone identity:
  - udev USB serial filter: `00008101001914341143003A`
  - gphoto serial validation: `F17F6GGB0D91`
- Archive retention default updated from 1 year to 3 years:
  - `RETENTION_DAYS=1095` in `photo-archive.sh`.
- NAS mount reliability/workability addressed:
  - CIFS mount options were hardened to avoid long-transfer drops:
    `uid=1000,gid=1000,file_mode=0664,dir_mode=0775,noperm,hard,echo_interval=30,noauto,x-systemd.automount,_netdev`
  - `/etc/fstab` bad wrapped entries were corrected with `fix-nas-mount.sh`.
- External Photos Library ingest from LaCie completed:
  - Source: `Photos Library.photoslibrary/originals`
  - Imported to: `~/media/photos/incoming/photoslibrary-originals`
  - Imported file count: `20549`
- Duplicate handling completed:
  - Hash-based duplicate scan against existing incoming corpus
  - Duplicates found and removed from imported folder only: `3`
- HEIC/HEIF decode in digiKam fixed by installing RPM Fusion HEIF backend:
  - `libheif-freeworld`, `libde265`, `x265-libs`
  - codec plugins present under `/usr/lib64/libheif/`.
- Added shell shortcuts in `~/.bashrc` for safer sync operation:
  - `photo-sync`
  - `photo-sync-bg`
  - `photo-sync-status`
  - `photo-log`
- Added monthly retention automation (user-level systemd):
  - `~/.config/systemd/user/photo-archive-monthly.service`
  - `~/.config/systemd/user/photo-archive-monthly.timer`
  - Enabled with `systemctl --user enable --now photo-archive-monthly.timer`
- Added overlap protection to archive script:
  - `photo-archive.sh` now uses a lock file (`/tmp/photo-archive.lock`) and exits if another run is active.

## Current operational caveat
There were multiple overlapping rsync processes during manual retries. Run only one sync at a time.

Recommended clean pattern:
1. Ensure no duplicate sync jobs are running.
2. Run one command: `photo-sync`.
3. Monitor with: `photo-sync-status` and `photo-log`.

## Verification commands
```bash
photo-sync-status
photo-log
find ~/media/photos/incoming/photoslibrary-originals -type f | wc -l
du -sh ~/media/photos/incoming/photoslibrary-originals
```

## Power/sleep strategy
Preferred compromise: keep normal system suspend settings and run long transfers under inhibition only.

```bash
systemd-inhibit --what=sleep:idle --why="Photo NAS sync" \
  bash -lc "$HOME/tools/scripts/photo-archive.sh --sync-only"
```

## What remains
- Let a single clean `photo-sync` run complete end-to-end after prior interrupted attempts.
- Monthly timer exists; optionally tune schedule (`OnCalendar`) and randomization window.
