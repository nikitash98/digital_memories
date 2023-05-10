const vertexShader = `
uniform vec3 startPosition;
uniform float uTime;
varying vec3 vColor;
float rand(vec2 co) {
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }
void main() {
    vColor = color;

    vec3 newPosition = mix(startPosition, position, clamp(uTime * (rand(color.xy) + 0.2), 0.0, 1.0));


    newPosition.x += sin(newPosition.y * 4.0 + uTime * 2.0 + newPosition.z) * 0.05;
    newPosition.y += sin(newPosition.y * 4.0 + uTime * 2.0 + newPosition.z) * 0.05;
  
    newPosition.z += sin(newPosition.z * 4.0 + uTime * 2.0 + newPosition.z) * 0.05;
  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    gl_PointSize = 6.0;
}

`
export default vertexShader