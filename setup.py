from setuptools import setup, find_packages

setup(
    name='cs',
    extras_require=dict(tests=['pytest']),
    packages=find_packages(),
    package_dir = {"": "."},
)