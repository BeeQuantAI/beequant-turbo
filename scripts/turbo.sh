#!/bin/bash
CMD=$1
FILTER=$2
PACKAGE_MANAGER=pnpm
NAMESPACE=@beequant

if [ -n "$CMD" ]; then
  case $CMD in
  "dev")
    if [ -n "$FILTER" ]; then
      case $FILTER in
      "client")
        $PACKAGE_MANAGER turbo run dev --filter=$NAMESPACE/client --filter=$NAMESPACE/platform-api
        ;;

      *)
        $PACKAGE_MANAGER turbo run dev --filter=$NAMESPACE/$FILTER
        ;;
      esac
    else
      $PACKAGE_MANAGER turbo run dev
    fi
    ;;

  "start")
    if [ -n "$FILTER" ]; then
      case $FILTER in
      "client")
        $PACKAGE_MANAGER turbo run start --filter=$NAMESPACE/client --filter=$NAMESPACE/platform-api
        ;;

      *)
        $PACKAGE_MANAGER turbo run start --filter=$NAMESPACE/$FILTER
        ;;
      esac
    else
      $PACKAGE_MANAGER turbo run start
    fi
    ;;

  "ci")
    $PACKAGE_MANAGER turbo run lint --force
    $PACKAGE_MANAGER turbo run type-check --force
    $PACKAGE_MANAGER turbo run build --force
    ;;

  *)
    $PACKAGE_MANAGER turbo run $CMD
    ;;

  esac
else
  echo "No command provided"
fi
