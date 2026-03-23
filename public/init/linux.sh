#!/usr/bin/env bash

# ssh pubkey
ssh-import-id gh:shiragicord

# Zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

sed -i "s/plugins=(git)/plugins=(git zsh-syntax-highlighting zsh-autosuggestions)/" ~/.zshrc

cat <<EOF>> ~/.zshrc
PROMPT='%F{cyan}%n@%m%f %F{yellow}%~%f %F{magenta}$(git_prompt_info)%f %(?.%F{green}.%F{red})$%f '
ZSH_THEME_GIT_PROMPT_PREFIX="("
ZSH_THEME_GIT_PROMPT_SUFFIX=")"
ZSH_THEME_GIT_PROMPT_BRANCH="%F{blue}"
EOF

# astral-uv
curl -LsSf https://astral.sh/uv/install.sh | sh
