import React, { FC } from 'react';
import { Link } from 'umi';

const AnchorLink: FC = (props) => {
  console.log('props===', props);
  return <Link to="/#/#hello" {...props} />;
};
export default AnchorLink;
