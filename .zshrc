eval "$(zoxide init zsh)"
eval "$(starship init zsh)"

eval "$(~/.local/bin/mise activate bash)"

# pnpm
export PNPM_HOME="/Users/trevorhuis/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac