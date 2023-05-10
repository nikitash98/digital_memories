const vertexShader = `
uniform float uTime;
uniform float uSize;
uniform float uNoise;
varying vec3 vColor;

float rand(vec2 co) {
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}
void main() {
  vColor = color;
  float noise = rand(position.xy + uTime) * uNoise ;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.x += sin(modelPosition.y * 4.0 + uTime * 2.0 + modelPosition.z) * 0.05 + noise * 0.01;
  modelPosition.y += sin(modelPosition.y * 4.0 + uTime * 2.0 + modelPosition.z) * 0.05 + noise * 0.01;

  modelPosition.z += sin(modelPosition.z * 4.0 + uTime * 2.0 + modelPosition.z) * 0.05 + noise * 0.01;

  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
  gl_PointSize = uSize;
}

`

export default vertexShader
