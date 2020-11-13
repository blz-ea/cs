prep:

lab.start: prep
	./jupyter_lab_start.sh

lab.install: prep
	./jupyter_lab_install.sh

setup.python: prep
    pip install -e ".[tests]"