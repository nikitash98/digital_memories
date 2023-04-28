const vertexShader = `
uniform float uTime;
varying vec3 vColor;

void main() {
  vColor = color;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.x += sin(modelPosition.y * 4.0 + uTime * 2.0 + modelPosition.z) * 0.05;
  modelPosition.y += sin(modelPosition.y * 4.0 + uTime * 2.0 + modelPosition.z) * 0.05;

  modelPosition.z += sin(modelPosition.z * 4.0 + uTime * 2.0 + modelPosition.z) * 0.05;

  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
  gl_PointSize = 3.0;
}

`

export default vertexShader
