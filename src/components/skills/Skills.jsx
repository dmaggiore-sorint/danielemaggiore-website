import React from 'react';
import FormattedMessage from '../global/FormattedMessage';
import Badge from './Badge';
import html from '../../assets/html.png';
import angular from '../../assets/angular.png';
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
import vue from '../../assets/vue.png';

const Skills = ({ test }) => {
  return (
    <div className="skills">
      <div className="skills__content">
        <p className="skills__title">
          <FormattedMessage id="skills" />
        </p>
        <p className="skills__description">
          <Badge title="HTML 6" image={html} />
          <Badge title="HTML 6" image={css} />
          <Badge title="HTML 6" image={sass} />
          <Badge title="HTML 6" image={js} />
          <Badge title="HTML 6" image={vue} />
          <Badge title="HTML 6" image={react} />
          <Badge title="HTML 6" image={angular} />
          <Badge title="HTML 6" image={ts} />
          <Badge title="HTML 6" image={flutter} />
          <Badge title="HTML 6" image={figma} />
          <Badge title="HTML 6" image={cSharp} />
          <Badge title="HTML 6" image={python} />
          <Badge title="HTML 6" image={flask} />
          <Badge title="HTML 6" image={twig} />
        </p>
      </div>
    </div>
  );
};

export default Skills;
