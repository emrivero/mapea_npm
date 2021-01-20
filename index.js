import { map } from 'mapea-prueba/mapea';
import AttributeTable from 'mapea-prueba/plugins/attributetable';
import Geosearch from 'mapea-prueba/plugins/geosearch'
import GeosearchByCoordinates from 'mapea-prueba/plugins/geosearchbycoordinates'
import Printer from 'mapea-prueba/plugins/printerdos';
const mapjs = map({
    container: 'map',
    controls: ['layerswitcher']
  }).addPlugin(new AttributeTable())
  .addPlugin(new Geosearch())
  .addPlugin(new GeosearchByCoordinates())
  .addPlugin(new Printer());
