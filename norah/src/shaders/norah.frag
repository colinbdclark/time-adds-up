precision highp float;

uniform sampler2D oneSampler;
uniform sampler2D twoSampler;
uniform sampler2D threeSampler;
uniform sampler2D fourSampler;
uniform sampler2D fiveSampler;
uniform sampler2D sixSampler;
uniform sampler2D sevenSampler;
uniform sampler2D eightSampler;
uniform sampler2D nineSampler;

uniform vec2 textureSize;

void main(void) {
    vec2 coords = vec2(gl_FragCoord.x / textureSize.x, gl_FragCoord.y / textureSize.y);
    vec4 oneFrag = texture2D(oneSampler, coords);
    vec4 twoFrag = texture2D(twoSampler, coords);
    vec4 threeFrag = texture2D(threeSampler, coords);
    vec4 fourFrag = texture2D(fourSampler, coords);
    vec4 fiveFrag = texture2D(fiveSampler, coords);
    vec4 sixFrag = texture2D(sixSampler, coords);
    vec4 sevenFrag = texture2D(sevenSampler, coords);
    vec4 eightFrag = texture2D(eightSampler, coords);
    vec4 nineFrag = texture2D(nineSampler, coords);

    // linear. old scaling was * 0.15.
    vec4 color = (oneFrag + twoFrag + threeFrag +
        fourFrag + fiveFrag + sixFrag + sevenFrag +
        eightFrag + nineFrag) / 9.0;

    // From Klaus:
    // https://krpano.com/forum/wbb/index.php?page=Thread&threadID=13863
    float contrast = 2.3;
    float brightness = 0.7;
    float gamma = 2.4; // Should this be 2.2? (https://en.wikipedia.org/wiki/Rec._709#Transfer_characteristics)

    vec4 contrasty = vec4(0.0, 0.0, 0.0, 1.0);
    contrasty.r = (pow(color.r, gamma) - 0.5) * contrast + brightness + 0.5;
    contrasty.g = (pow(color.g, gamma) - 0.5) * contrast + brightness + 0.5;
    contrasty.b = (pow(color.b, gamma) - 0.5) * contrast + brightness + 0.5;

    gl_FragColor = contrasty;
}
