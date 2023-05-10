const vertexShader = `

uniform float slide;
varying vec3 vColor;

attribute vec3 customPosition1;
attribute vec3 color;
attribute vec3 customPosition2;

float rand(vec2 co) {
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}
void main() {
    vColor = color;
    vec3 newPosition = position + customPosition2 * slide;
  vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);

  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
  gl_PointSize = 2.0;
}

`

export default vertexShader
