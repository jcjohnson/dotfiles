runtime bundle/vim-pathogen/autoload/pathogen.vim
execute pathogen#infect()

set number
set ruler

filetype plugin indent on
syntax on

set expandtab
set autoindent
set tabstop=2
set shiftwidth=2
set softtabstop=2

set lines=50 columns=85

au FileType python set shiftwidth=2
colorscheme jellybeans
