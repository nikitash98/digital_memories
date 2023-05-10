const vertexShader = `
uniform float uTime;
uniform float uNoise;
varying vec3 vColor;
varying float height;
float rand(vec2 co) {
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}
void main() {
  vColor = color;
  float noise = rand(position.xy + uTime) * uNoise ;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.x += sin(modelPosition.y * 4.0 + uTime * 4.0 + modelPosition.z) * 0.05 + noise * 0.01;
  modelPosition.y += sin(modelPosition.x * 4.0 + uTime * 1.0 + modelPosition.z) * 0.05 +  sin(modelPosition.y * 4.0 + uTime * 4.0 + modelPosition.z) * 0.05 * 1.0 + noise ;

  modelPosition.z += sin(modelPosition.z * 4.0 + uTime * 4.0 + modelPosition.z) * 0.05 + noise * 0.01;
  height = modelPosition.y;
  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
  gl_PointSize = 5.0;
}

`

export default vertexShader
