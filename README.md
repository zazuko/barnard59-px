# barnard59-px

This package provides support for the PC-Axis (PX) format for Barnard59 Linked Data pipelines.


## Examples

### Anzahl Forstbetriebe

The example reads a PX file from `https://www.pxweb.bfs.admin.ch/DownloadFile.aspx?file=px-x-0703010000_103`, parses it and writes the content as N-Triples to `examples/anzahl-forstbetriebe.out.nt`.
The pipeline can be started like this:

```bash
./node_modules/.bin/barnard59 run --format=text/turtle --pipeline=http://example.org/pipeline/pipeline --verbose examples/anzahl-forstbetriebe.ttl
```
