SHELL=/bin/bash

md := $(patsubst %.html,%.md,$(wildcard source/*.html))
md := $(patsubst source/%,%,$(md))

run: $(md)

%.md: source/%.html
	( set -eu -o pipefail ; \
	pandoc -i $< -t markdown | \
	sed -E 's/\(([^"]*).html(.*)\)/\(\1.md\2\)/g' | \
	sed -E 's/\(([^"]*).html(.*)\)/\(\1.md\2\)/g' > $@.tmp && mv -vf $@.tmp $@ ; )

print:
:echo $(md)

clean:
	rm -rf *md
