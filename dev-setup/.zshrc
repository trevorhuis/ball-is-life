# Path to your Oh My Zsh installation.
export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="simple"

plugins=(
    git
    zsh-autosuggestions
)

source $ZSH/oh-my-zsh.sh

# Homebrew
eval "$(/opt/homebrew/bin/brew shellenv)"

# Zoxide
eval "$(zoxide init zsh)"

# Aliases

### File system
alias ls='eza -lh --group-directories-first --icons'
alias lsa='ls -a'
alias lt='eza --tree --level=2 --long --icons --git'
alias lta='lt -a'
alias ff="fzf --preview 'bat --style=numbers --color=always {}'"
alias fd='fdfind'
alias cd='z'

### Tools
alias lzg='lazygit'

### Directories
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
