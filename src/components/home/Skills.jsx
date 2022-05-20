import React from "react";
import FormattedMessage from "../global/FormattedMessage";
import Badge from './Badge';

import html from '../../assets/html.png';
import angular from '../../assets/angularjs.png';
import cSharp from '../../assets/csharp.png';
import css from '../../assets/css.png';
import figma from '../../assets/figma.png';
import flutter from '../../assets/flutter.png';
import flask from '../../assets/flask.png';
import js from '../../assets/js.png';
import python from '../../assets/python.png';
import react from '../../assets/react.png';
import sass from '../../assets/sass.png';
import ts from '../../assets/ts.png';
import twig from '../../assets/twig.png';
import vue from '../../assets/vuejs.png';

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__content">
        <p className="skills__title">
          <FormattedMessage id="skills" />
        </p>
        <div className="skills__badges">
          <Badge title="HTML 6" image={html} />
          <Badge title="CSS" image={css} />
          <Badge title="SASS" image={sass} />
          <Badge title="JAVASCRIPT" image={js} />
          <Badge title="VUE.JS" image={vue} />
          <Badge title="REACT" image={react} />
          <Badge title="ANGULARJS" image={angular} />
          <Badge title="TYPESCRIPT" image={ts} />
          <Badge title="FLUTTER" image={flutter} />
          <Badge title="FIGMA" image={figma} />
          <Badge title="C#" image={cSharp} />
          <Badge title="PYTHON" image={python} />
          <Badge title="FLASK" image={flask} />
          <Badge title="TWIG" image={twig} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
