precision highp float;

const int numLayers = 11; // TODO: Can this be a uniform?
uniform sampler2D samplers[numLayers];
uniform vec2 textureSize;

void main(void) {
    vec2 coords = vec2(gl_FragCoord.x / textureSize.x, gl_FragCoord.y / textureSize.y);
    vec4 result = vec4(0.0, 0.0, 0.0, 1.0);

    for (int i = 0; i < numLayers; i++) {
        vec4 frag = texture2D(samplers[i], coords);
        result.rgb = result.rgb + frag.rgb / 9.0;
    }

    gl_FragColor = result;
}
