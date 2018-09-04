precision highp float;

const int numLayers = 16;
uniform sampler2D samplers[numLayers];
uniform float opacities[numLayers];
uniform vec2 textureSize;

vec4 adjustBrightnessContrast(float gamma, float brightness, float contrast, vec4 frag) {
    // From Klaus:
    // https://krpano.com/forum/wbb/index.php?page=Thread&threadID=13863
    vec4 result = vec4(0.0, 0.0, 0.0, 1.0);
    result.r = (pow(frag.r, gamma) - 0.5) * contrast + brightness + 0.5;
    result.g = (pow(frag.g, gamma) - 0.5) * contrast + brightness + 0.5;
    result.b = (pow(frag.b, gamma) - 0.5) * contrast + brightness + 0.5;

    return result;
}

void scaleColours(float rScale, float grScale, float bScale, vec4 frag) {
    frag.r = frag.r * rScale;
    frag.g = frag.g * grScale;
    frag.b = frag.b * bScale;
}

void main(void) {
    vec2 coords = vec2(gl_FragCoord.x / textureSize.x, gl_FragCoord.y / textureSize.y);
    vec4 sum = vec4(0.0, 0.0, 0.0, 1.0);

    for (int i = 0; i < numLayers; i++) {
        vec4 frag = texture2D(samplers[i], coords);
        sum.rgb = sum.rgb + (frag.rgb * opacities[i]);
    }

    vec4 contrasty = adjustBrightnessContrast(1.2, 0.13, 1.3, sum);
    gl_FragColor = contrasty;
}
