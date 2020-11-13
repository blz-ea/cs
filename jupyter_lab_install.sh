#!/bin/bash
INSTALLATION_PATH="$HOME/miniconda"
INSTALLER_PATH="/tmp/miniconda.sh"

JUPYTER_HOME_RC="$HOME/.bashrc"
CONDA_SHELL="bash"

if [[ -f "$HOME/.zshrc" ]]; then
  JUPYTER_HOME_RC="$HOME/.zshrc"
  CONDA_SHELL="zsh"
fi

source "$JUPYTER_HOME_RC"

NODEJS=$(command -v node)

# Check if Miniconda installation exists
if [ ! -d "$INSTALLATION_PATH" ]; then
  if [ ! -f "$INSTALLER_PATH" ]; then
    wget -O "$INSTALLER_PATH" https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
  fi
  chmod +x "$INSTALLER_PATH"
  "$INSTALLER_PATH" -b -p "$INSTALLATION_PATH"
fi

eval "$($INSTALLATION_PATH/bin/conda shell.$CONDA_SHELL hook)"
conda init

source "$JUPYTER_HOME_RC"

python setup.py install

apt install git curl -y
conda install -c anaconda cmake -y

conda config --system --set always_yes yes
conda config --system --set quiet true

conda install pandas \
        numpy \
        tensorflow \
        jupyterlab \
        ipykernel \
        ipywidgets

# JS/TS KERNEL
#conda install -c conda-forge nodejs -y
if [ ! -x "$NODEJS" ]; then
  wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  source "$JUPYTER_HOME_RC"
  nvm install stable
fi

npm install
npm install -g tslab --unsafe-perm
tslab install
# JS/TS KERNEL - END

# GOLANG KERNEL
conda install -c conda-forge go
env GO111MODULE=on go get github.com/gopherdata/gophernotes
mkdir -p ~/.local/share/jupyter/kernels/gophernotes
cd ~/.local/share/jupyter/kernels/gophernotes
cp "$(go env GOPATH)"/pkg/mod/github.com/gopherdata/gophernotes@v0.7.0/kernel/*  "."
chmod +w ./kernel.json # in case copied kernel.json has no write permission
sed "s|gophernotes|$(go env GOPATH)/bin/gophernotes|" < kernel.json.in > kernel.json
cd ~
# GOLANG KERNEL - END

# RUST KERNEL
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | bash -s -- -q -y
source "$HOME/.cargo/env"
export PATH="$HOME/.cargo/bin:$PATH"
cargo install evcxr_jupyter
evcxr_jupyter --install
# RUST KERNEL - END

pip install --upgrade \
    ipython \
    nbdime \
    jupytext \
    matplotlib \
    line-profiler \
    psutil \
    memory_profiler \
    import import_ipynb 

# BASH KERNEL
pip install wheel nbdime ipython bash_kernel pytest ipytest
python3 -m bash_kernel.install
# BASH KERNEL - END

conda install -c conda-forge voila \
        xeus-cling \
        jupyter_contrib_nbextensions \
        jupytext

jupyter labextension install @jupyterlab/debugger \
        @jupyter-voila/jupyterlab-preview \
        jupyterlab-drawio \
        nbdime-jupyterlab \
        jupyterlab_filetree \
	@ijmbarr/jupyterlab_spellchecker

jupyter contrib nbextension install --sys-prefix
jupyter nbextension enable --py widgetsnbextension

jupyter nbextension install --py jupytext
jupyter nbextension enable --py jupytext
jupyter nbextension enable spellchecker/main

jupyter serverextension enable jupytext

jupyter serverextension enable voila --sys-prefix
