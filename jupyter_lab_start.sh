#!/bin/bash
INSTALLATION_PATH="$HOME/miniconda"

if [ ! -d "$INSTALLATION_PATH" ]; then
  echo "Jupyter lab installation folder was not found. Exiting."
  exit 1
fi

JUPYTER_PORT=${JUPYTER_PORT:-9999}
JUPYTER_INTERFACE="${JUPYTER_INTERFACE:-eth0}"
JUPYTER_IP="${JUPYTER_IP:-$(ip addr show "${JUPYTER_INTERFACE}" | grep "inet\b" | awk '{print $2}' | cut -d/ -f1)}"
JUPYTER_PASSWORD=${JUPYTER_PASSWORD}
JUPYTER_TOKEN=${JUPYTER_TOKEN}
JUPYTER_NOTEBOOK_DIR=${JUPYTER_NOTEBOOK_DIR:-$HOME}
JUPYTER_HOME_RC="$HOME/.bashrc"

source $JUPYTER_HOME_RC

if [ "$JUPYTER_PASSWORD" == "" ]; then 
  JUPYTER_PASSWORD_HASH=""
else
  JUPYTER_PASSWORD_HASH=$(python3 -c "from notebook.auth import passwd; print(passwd('"$JUPYTER_PASSWORD"'))")
fi

jupyter notebook --generate-config -y

sed -i "/c.NotebookApp.password/c\c.NotebookApp.password = u'"$JUPYTER_PASSWORD_HASH"'" ~/.jupyter/jupyter_notebook_config.py
sed -i "/c.NotebookApp.token/c\c.NotebookApp.token = '"$JUPYTER_TOKEN"'" ~/.jupyter/jupyter_notebook_config.py
sed -i "/c.NotebookApp.notebook_dir/c\c.NotebookApp.notebook_dir = '"$JUPYTER_NOTEBOOK_DIR"'" ~/.jupyter/jupyter_notebook_config.py

cat > ~/.ipython/profile_default/ipython_config.py <<EOL
c.InteractiveShellApp.extensions = [
    'line_profiler',
    'memory_profiler',
]
EOL

jupyter lab --no-browser --allow-root --port "$JUPYTER_PORT" --ip "$JUPYTER_IP"
