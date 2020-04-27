import jss from 'jss';
import jssCamelCase from 'jss-plugin-camel-case';
import jssNested from 'jss-plugin-nested';
import jssDefaultUnit from 'jss-plugin-default-unit';
import { Styles } from 'jss';

export function createJssStyle<Name extends string>(
  styles: Partial<Styles<Name>>,
) {
  jss.use(jssCamelCase());
  jss.use(jssNested());
  jss.use(jssDefaultUnit({}));
  return jss.createStyleSheet(styles).attach();
}
