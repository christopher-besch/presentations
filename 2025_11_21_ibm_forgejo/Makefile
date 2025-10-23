.PHONY: all
all: architecture.svg

.PHONY: clean
clean:
	rm architecture.svg

architecture.svg: architecture.puml
	plantuml --format svg architecture.puml
