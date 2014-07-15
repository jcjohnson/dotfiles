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

au FileType python set shiftwidth=2 tabstop=2 softtabstop=2

if has("gui_running")
  set lines=50 columns=85
  colorscheme jellybeans
endif

imap jk <Esc>
