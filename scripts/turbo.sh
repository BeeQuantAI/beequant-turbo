#!/bin/bash
CMD=$1
FILTER=$2
NAMESPACE=@beequant

if [ -n "$CMD" ]; then
  case $CMD in
  "dev")
    if [ -n "$FILTER" ]; then
      case $FILTER in
      "client-vite")
        yarn turbo run dev --filter=$NAMESPACE/client --filter=$NAMESPACE/client-vite --filter=$NAMESPACE/platform-api
        ;;

      "client")
        yarn turbo run dev --filter=$NAMESPACE/client --filter=$NAMESPACE/platform-api
        ;;

      *)
        yarn turbo run dev --filter=$NAMESPACE/$FILTER
        ;;
      esac
    else
      yarn turbo run dev
    fi
    ;;

  "start")
    if [ -n "$FILTER" ]; then
      case $FILTER in
      "client-vite")
        yarn turbo run start --filter=$NAMESPACE/client --filter=$NAMESPACE/client-vite  --filter=$NAMESPACE/platform-api
        ;;

      "client")
        yarn turbo run start --filter=$NAMESPACE/client --filter=$NAMESPACE/platform-api
        ;;

      *)
        yarn turbo run start --filter=$NAMESPACE/$FILTER
        ;;
      esac
    else
      yarn turbo run start
    fi
    ;;

  "ci")
    yarn turbo run lint --force
    yarn turbo run type-check --force
    yarn turbo run build --force
    ;;

  *)
    yarn turbo run $CMD
    ;;

  esac
else
  echo "No command provided"
fi
