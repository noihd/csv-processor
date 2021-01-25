/**
 * Sort Object Keys Alphabetically
 * @param {object} obj Object to Sort
 * @param {function} callback Callback Handler
 */
const keyArrange = (obj, callback) => {
  let out = {}
  Object.keys(obj)
    .sort(callback || undefined)
    .forEach(function(k) {
      out[k] = obj[k]
    })
  return out
}

/**
 * CSV to JSON Mappings
 */
const mappings = {
  CEN_1_c: {
    column: 185,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_1_fc: {
    column: 264,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_1_fnp: {
    column: 262,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_1_fp: {
    column: 263,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_1_geo: {
    column: 247,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_1_np: {
    column: 159,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_1_p: {
    column: 202,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_2_c: {
    column: 186,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_2_fc: {
    column: 267,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_2_fnp: {
    column: 265,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_2_fp: {
    column: 266,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_2_geo: {
    column: 248,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_2_np: {
    column: 160,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_2_p: {
    column: 203,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_3_c: {
    column: 187,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_3_fc: {
    column: 270,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_3_fnp: {
    column: 268,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_3_fp: {
    column: 269,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_3_geo: {
    column: 249,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_3_np: {
    column: 161,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_3_p: {
    column: 204,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_4_c: {
    column: 188,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_4_fc: {
    column: 273,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_4_fnp: {
    column: 271,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_4_fp: {
    column: 272,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_4_geo: {
    column: 250,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_4_np: {
    column: 162,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_4_p: {
    column: 201,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_5_c: {
    column: 189,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_5_fc: {
    column: 276,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_5_fnp: {
    column: 274,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_5_fp: {
    column: 275,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_5_geo: {
    column: 251,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_5_np: {
    column: 163,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_5_p: {
    column: 205,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_6_c: {
    column: 190,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_6_fc: {
    column: 279,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_6_fnp: {
    column: 277,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_6_fp: {
    column: 278,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_6_geo: {
    column: 252,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_6_np: {
    column: 164,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_6_p: {
    column: 206,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_7_c: {
    column: 191,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_7_fc: {
    column: 282,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_7_fnp: {
    column: 280,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_7_fp: {
    column: 281,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_7_geo: {
    column: 253,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_7_np: {
    column: 165,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_7_p: {
    column: 207,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_8_c: {
    column: 192,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_8_fc: {
    column: 285,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_8_fnp: {
    column: 283,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_8_fp: {
    column: 284,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_8_geo: {
    column: 254,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_8_np: {
    column: 166,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_8_p: {
    column: 208,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_9_c: {
    column: 193,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_9_fc: {
    column: 288,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_9_fnp: {
    column: 286,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_9_fp: {
    column: 287,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_9_geo: {
    column: 255,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_9_np: {
    column: 167,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_9_p: {
    column: 209,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_10_c: {
    column: 194,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_10_fc: {
    column: 291,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_10_fnp: {
    column: 289,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_10_fp: {
    column: 290,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_10_geo: {
    column: 256,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_10_np: {
    column: 168,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_10_p: {
    column: 210,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_11_c: {
    column: 195,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_11_fc: {
    column: 294,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_11_fnp: {
    column: 292,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_11_fp: {
    column: 293,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_11_geo: {
    column: 257,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_11_np: {
    column: 169,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_11_p: {
    column: 211,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_12_c: {
    column: 196,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_12_fc: {
    column: 297,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_12_fnp: {
    column: 295,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_12_fp: {
    column: 296,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_12_geo: {
    column: 258,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_12_np: {
    column: 170,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_12_p: {
    column: 212,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_13_c: {
    column: 197,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_13_fc: {
    column: 300,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_13_fnp: {
    column: 298,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_13_fp: {
    column: 299,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_13_geo: {
    column: 259,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_13_np: {
    column: 171,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_13_p: {
    column: 213,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_14_c: {
    column: 198,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_14_fc: {
    column: 303,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_14_fnp: {
    column: 301,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_14_fp: {
    column: 302,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_14_geo: {
    column: 260,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_14_np: {
    column: 172,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_14_p: {
    column: 214,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_15_c: {
    column: 199,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_15_fc: {
    column: 306,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_15_fnp: {
    column: 304,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_15_fp: {
    column: 305,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_15_geo: {
    column: 261,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_15_np: {
    column: 173,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_15_p: {
    column: 215,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_16_c: {
    column: 175,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_16_fc: {
    column: 228,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_16_fnp: {
    column: 227,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_16_geo: {
    column: 217,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_16_np: {
    column: 149,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_17_c: {
    column: 176,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_17_fc: {
    column: 230,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_17_fnp: {
    column: 229,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_17_geo: {
    column: 218,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_17_np: {
    column: 150,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_18_c: {
    column: 179,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_18_fc: {
    column: 236,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_18_fnp: {
    column: 235,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_18_geo: {
    column: 221,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_18_np: {
    column: 153,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_19_c: {
    column: 182,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_19_fc: {
    column: 242,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_19_fnp: {
    column: 241,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_19_geo: {
    column: 224,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_19_np: {
    column: 156,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_20_c: {
    column: 178,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_20_fc: {
    column: 234,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_20_fnp: {
    column: 233,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_20_geo: {
    column: 220,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_20_np: {
    column: 152,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_21_c: {
    column: 181,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_21_fc: {
    column: 240,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_21_fnp: {
    column: 239,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_21_geo: {
    column: 223,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_21_np: {
    column: 155,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_22_c: {
    column: 184,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_22_fc: {
    column: 246,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_22_fnp: {
    column: 245,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_22_geo: {
    column: 226,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_22_np: {
    column: 158,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_23_c: {
    column: 177,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_23_fc: {
    column: 232,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_23_fnp: {
    column: 231,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_23_geo: {
    column: 219,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_23_np: {
    column: 151,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_24_c: {
    column: 180,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_24_fc: {
    column: 238,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_24_fnp: {
    column: 237,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_24_geo: {
    column: 222,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_24_np: {
    column: 154,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_25_c: {
    column: 183,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_25_fc: {
    column: 244,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_25_fnp: {
    column: 243,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_25_geo: {
    column: 225,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_25_np: {
    column: 157,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_26_c: {
    column: 200,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_26_np: {
    column: 174,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  CEN_26_p: {
    column: 216,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_1: {
    column: 329,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2: {
    column: 330,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_a: {
    column: 422,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_b: {
    column: 419,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_h: {
    column: 421,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_ia: {
    column: 520,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_ib: {
    column: 517,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_ih: {
    column: 519,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_ime: {
    column: 521,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_ina: {
    column: 522,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_iur: {
    column: 523,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_iw: {
    column: 518,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_me: {
    column: 423,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_na: {
    column: 424,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_ns: {
    column: 652,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_ur: {
    column: 425,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_2_w: {
    column: 420,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3: {
    column: 331,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_a: {
    column: 429,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_b: {
    column: 426,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_h: {
    column: 428,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_ia: {
    column: 527,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_ib: {
    column: 524,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_ih: {
    column: 526,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_ime: {
    column: 528,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_ina: {
    column: 529,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_iur: {
    column: 530,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_iw: {
    column: 525,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_me: {
    column: 430,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_na: {
    column: 431,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_ns: {
    column: 653,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_ur: {
    column: 432,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_3_w: {
    column: 427,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4: {
    column: 332,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_a: {
    column: 436,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_b: {
    column: 433,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_h: {
    column: 435,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_ia: {
    column: 534,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_ib: {
    column: 531,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_ih: {
    column: 533,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_ime: {
    column: 535,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_ina: {
    column: 536,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_iur: {
    column: 537,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_iw: {
    column: 532,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_me: {
    column: 437,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_na: {
    column: 438,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_ns: {
    column: 654,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_ur: {
    column: 439,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_4_w: {
    column: 434,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5: {
    column: 333,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_a: {
    column: 443,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_b: {
    column: 440,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_h: {
    column: 442,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_ia: {
    column: 541,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_ib: {
    column: 538,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_ih: {
    column: 540,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_ime: {
    column: 542,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_ina: {
    column: 543,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_iur: {
    column: 544,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_iw: {
    column: 539,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_me: {
    column: 444,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_na: {
    column: 445,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_ns: {
    column: 655,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_ur: {
    column: 446,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_5_w: {
    column: 441,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6: {
    column: 334,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_a: {
    column: 450,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_b: {
    column: 447,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_h: {
    column: 449,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_ia: {
    column: 548,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_ib: {
    column: 545,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_ih: {
    column: 547,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_ime: {
    column: 549,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_ina: {
    column: 550,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_iur: {
    column: 551,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_iw: {
    column: 546,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_me: {
    column: 451,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_na: {
    column: 452,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_ns: {
    column: 656,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_ur: {
    column: 453,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_6_w: {
    column: 448,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7: {
    column: 335,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_a: {
    column: 457,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_b: {
    column: 454,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_h: {
    column: 456,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_ia: {
    column: 555,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_ib: {
    column: 552,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_ih: {
    column: 554,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_ime: {
    column: 556,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_ina: {
    column: 557,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_iur: {
    column: 558,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_iw: {
    column: 553,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_me: {
    column: 458,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_na: {
    column: 459,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_ns: {
    column: 657,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_ur: {
    column: 460,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_7_w: {
    column: 455,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8: {
    column: 336,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_a: {
    column: 464,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_b: {
    column: 461,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_h: {
    column: 463,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_ia: {
    column: 562,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_ib: {
    column: 559,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_ih: {
    column: 561,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_ime: {
    column: 563,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_ina: {
    column: 564,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_iur: {
    column: 565,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_iw: {
    column: 560,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_me: {
    column: 465,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_na: {
    column: 466,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_ns: {
    column: 658,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_ur: {
    column: 467,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_8_w: {
    column: 462,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9: {
    column: 337,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_a: {
    column: 471,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_a_ns: {
    column: 754,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_b: {
    column: 468,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_b_ns: {
    column: 751,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_h: {
    column: 470,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_h_ns: {
    column: 753,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_ia: {
    column: 569,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_ia_ns: {
    column: 761,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_ib: {
    column: 566,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_ib_ns: {
    column: 758,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_ih: {
    column: 568,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_ih_ns: {
    column: 760,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_ime: {
    column: 570,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_ime_ns: {
    column: 762,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_ina: {
    column: 571,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_ina_ns: {
    column: 763,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_iur: {
    column: 572,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_iur_ns: {
    column: 764,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_iw: {
    column: 567,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_iw_ns: {
    column: 759,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_me: {
    column: 472,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_me_ns: {
    column: 755,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_na: {
    column: 473,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_na_ns: {
    column: 756,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_ns: {
    column: 659,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_ur: {
    column: 474,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_ur_ns: {
    column: 757,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_w: {
    column: 469,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_9_w_ns: {
    column: 752,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10: {
    column: 338,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_a: {
    column: 478,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_b: {
    column: 475,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_h: {
    column: 477,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_ia: {
    column: 576,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_ib: {
    column: 573,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_ih: {
    column: 575,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_ime: {
    column: 577,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_ina: {
    column: 578,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_iur: {
    column: 579,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_iw: {
    column: 574,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_me: {
    column: 479,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_na: {
    column: 480,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_ns: {
    column: 660,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_ur: {
    column: 481,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_10_w: {
    column: 476,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11: {
    column: 339,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_a: {
    column: 485,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_b: {
    column: 482,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_h: {
    column: 484,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_ia: {
    column: 583,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_ib: {
    column: 580,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_ih: {
    column: 582,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_ime: {
    column: 584,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_ina: {
    column: 585,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_iur: {
    column: 586,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_iw: {
    column: 581,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_me: {
    column: 486,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_na: {
    column: 487,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_ns: {
    column: 661,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_ur: {
    column: 488,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_11_w: {
    column: 483,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12: {
    column: 340,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_a: {
    column: 492,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_b: {
    column: 489,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_h: {
    column: 491,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_ia: {
    column: 590,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_ib: {
    column: 587,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_ih: {
    column: 589,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_ime: {
    column: 591,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_ina: {
    column: 592,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_iur: {
    column: 593,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_iw: {
    column: 588,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_me: {
    column: 493,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_na: {
    column: 494,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_ns: {
    column: 662,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_ur: {
    column: 495,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_12_w: {
    column: 490,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13: {
    column: 341,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_a: {
    column: 499,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_b: {
    column: 496,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_h: {
    column: 498,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_ia: {
    column: 597,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_ib: {
    column: 594,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_ih: {
    column: 596,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_ime: {
    column: 598,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_ina: {
    column: 599,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_iur: {
    column: 600,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_iw: {
    column: 595,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_me: {
    column: 500,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_na: {
    column: 501,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_ns: {
    column: 663,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_ur: {
    column: 502,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_13_w: {
    column: 497,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14: {
    column: 342,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_a: {
    column: 506,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_b: {
    column: 503,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_h: {
    column: 505,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_ia: {
    column: 604,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_ib: {
    column: 601,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_ih: {
    column: 603,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_ime: {
    column: 605,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_ina: {
    column: 606,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_iur: {
    column: 607,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_iw: {
    column: 602,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_me: {
    column: 507,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_na: {
    column: 508,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_ns: {
    column: 664,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_ur: {
    column: 509,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_14_w: {
    column: 504,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15: {
    column: 343,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_a: {
    column: 513,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_b: {
    column: 510,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_h: {
    column: 512,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_ia: {
    column: 611,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_ib: {
    column: 608,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_ih: {
    column: 610,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_ime: {
    column: 612,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_ina: {
    column: 613,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_iur: {
    column: 614,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_iw: {
    column: 609,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_me: {
    column: 514,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_na: {
    column: 515,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_ns: {
    column: 665,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_ur: {
    column: 516,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_15_w: {
    column: 511,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16: {
    column: 345,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_a: {
    column: 366,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_a_ns: {
    column: 673,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_b: {
    column: 363,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_b_ns: {
    column: 670,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_h: {
    column: 365,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_h_ns: {
    column: 672,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_ia: {
    column: 394,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_ia_ns: {
    column: 708,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_ib: {
    column: 391,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_ib_ns: {
    column: 705,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_ih: {
    column: 393,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_ih_ns: {
    column: 707,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_ime: {
    column: 395,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_ime_ns: {
    column: 709,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_ina: {
    column: 396,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_ina_ns: {
    column: 710,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_iur: {
    column: 397,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_iur_ns: {
    column: 711,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_iw: {
    column: 392,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_iw_ns: {
    column: 706,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_me: {
    column: 367,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_me_ns: {
    column: 674,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_na: {
    column: 368,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_na_ns: {
    column: 675,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_ns: {
    column: 666,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_ur: {
    column: 369,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_ur_ns: {
    column: 676,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_w: {
    column: 364,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_16_w_ns: {
    column: 671,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17: {
    column: 346,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_a: {
    column: 373,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_a_ns: {
    column: 680,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_b: {
    column: 370,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_b_ns: {
    column: 677,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_h: {
    column: 372,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_h_ns: {
    column: 679,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_ia: {
    column: 401,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_ia_ns: {
    column: 715,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_ib: {
    column: 398,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_ib_ns: {
    column: 712,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_ih: {
    column: 400,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_ih_ns: {
    column: 714,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_ime: {
    column: 402,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_ime_ns: {
    column: 716,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_ina: {
    column: 403,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_ina_ns: {
    column: 717,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_iur: {
    column: 404,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_iur_ns: {
    column: 718,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_iw: {
    column: 399,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_iw_ns: {
    column: 713,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_me: {
    column: 374,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_me_ns: {
    column: 681,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_na: {
    column: 375,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_na_ns: {
    column: 682,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_ns: {
    column: 667,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_ur: {
    column: 376,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_ur_ns: {
    column: 683,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_w: {
    column: 371,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_17_w_ns: {
    column: 678,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18: {
    column: 347,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_a: {
    column: 380,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_a_ns: {
    column: 687,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_b: {
    column: 377,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_b_ns: {
    column: 684,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_h: {
    column: 379,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_h_ns: {
    column: 686,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_ia: {
    column: 408,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_ia_ns: {
    column: 722,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_ib: {
    column: 405,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_ib_ns: {
    column: 719,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_ih: {
    column: 407,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_ih_ns: {
    column: 721,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_ime: {
    column: 409,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_ime_ns: {
    column: 723,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_ina: {
    column: 410,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_ina_ns: {
    column: 724,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_iur: {
    column: 411,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_iur_ns: {
    column: 725,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_iw: {
    column: 406,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_iw_ns: {
    column: 720,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_me: {
    column: 381,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_me_ns: {
    column: 688,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_na: {
    column: 382,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_na_ns: {
    column: 689,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_ns: {
    column: 668,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_ur: {
    column: 383,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_ur_ns: {
    column: 690,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_w: {
    column: 378,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_18_w_ns: {
    column: 685,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19: {
    column: 348,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_a: {
    column: 387,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_a_ns: {
    column: 694,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_b: {
    column: 384,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_b_ns: {
    column: 691,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_h: {
    column: 386,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_h_ns: {
    column: 693,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_ia: {
    column: 415,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_ia_ns: {
    column: 729,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_ib: {
    column: 412,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_ib_ns: {
    column: 726,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_ih: {
    column: 414,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_ih_ns: {
    column: 728,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_ime: {
    column: 416,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_ime_ns: {
    column: 730,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_ina: {
    column: 417,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_ina_ns: {
    column: 731,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_iur: {
    column: 418,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_iur_ns: {
    column: 732,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_iw: {
    column: 413,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_iw_ns: {
    column: 727,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_me: {
    column: 388,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_me_ns: {
    column: 695,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_na: {
    column: 389,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_na_ns: {
    column: 696,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_ns: {
    column: 669,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_ur: {
    column: 390,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_ur_ns: {
    column: 697,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_w: {
    column: 385,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_19_w_ns: {
    column: 692,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20: {
    column: 615,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_a: {
    column: 619,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_b: {
    column: 616,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_h: {
    column: 618,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_ia: {
    column: 626,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_ib: {
    column: 623,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_ih: {
    column: 625,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_ime: {
    column: 627,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_ina: {
    column: 628,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_iur: {
    column: 629,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_iw: {
    column: 624,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_me: {
    column: 620,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_na: {
    column: 621,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_ur: {
    column: 622,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_20_w: {
    column: 617,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21: {
    column: 630,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_a: {
    column: 634,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_b: {
    column: 631,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_h: {
    column: 633,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_ia: {
    column: 641,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_ib: {
    column: 638,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_ih: {
    column: 640,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_ime: {
    column: 642,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_ina: {
    column: 643,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_iur: {
    column: 644,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_iw: {
    column: 639,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_me: {
    column: 635,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_na: {
    column: 636,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_ur: {
    column: 637,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_21_w: {
    column: 632,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_22: {
    column: 349,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_22_i: {
    column: 356,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_22_i_ns: {
    column: 698,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_22_ns: {
    column: 645,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_23: {
    column: 350,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_23_i: {
    column: 357,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_23_i_ns: {
    column: 699,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_23_ns: {
    column: 647,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_24: {
    column: 351,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_24_i: {
    column: 358,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_24_i_ns: {
    column: 700,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_24_ns: {
    column: 648,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_25: {
    column: 352,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_25_i: {
    column: 359,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_25_i_ns: {
    column: 701,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_25_ns: {
    column: 646,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_26: {
    column: 353,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_26_i: {
    column: 360,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_26_i_ns: {
    column: 702,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_26_ns: {
    column: 649,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_27: {
    column: 354,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_27_i: {
    column: 361,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_27_i_ns: {
    column: 703,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_27_ns: {
    column: 650,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_28: {
    column: 355,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_28_i: {
    column: 362,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_28_i_ns: {
    column: 704,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_28_ns: {
    column: 651,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  FE_29: {
    column: 344,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_1: {
    column: 55,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_1_i: {
    column: 90,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_2: {
    column: 56,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_2_i: {
    column: 91,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_3: {
    column: 57,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_3_i: {
    column: 92,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_4: {
    column: 58,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_4_i: {
    column: 93,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_5: {
    column: 742,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_5_i: {
    column: 747,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_6: {
    column: 743,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_6_i: {
    column: 749,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_7: {
    column: 744,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_7_i: {
    column: 748,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_8: {
    column: 745,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_8_i: {
    column: 750,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_9: {
    column: 59,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_9_i: {
    column: 89,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_10: {
    column: 60,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_10_i: {
    column: 94,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_11: {
    column: 61,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_11_i: {
    column: 95,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_12: {
    column: 62,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_12_i: {
    column: 96,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_13: {
    column: 63,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_13_i: {
    column: 97,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_14: {
    column: 64,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_14_i: {
    column: 98,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_15: {
    column: 65,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_15_i: {
    column: 99,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_16: {
    column: 66,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_16_i: {
    column: 100,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_17: {
    column: 67,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_17_i: {
    column: 101,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_18: {
    column: 68,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_18_i: {
    column: 102,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_19: {
    column: 69,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_19_i: {
    column: 103,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_20: {
    column: 70,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_20_i: {
    column: 104,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_21: {
    column: 71,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_21_i: {
    column: 105,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_22: {
    column: 72,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_22_i: {
    column: 106,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_23: {
    column: 73,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_23_i: {
    column: 107,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_24: {
    column: 74,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_24_i: {
    column: 108,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_25: {
    column: 75,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_25_i: {
    column: 109,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_26: {
    column: 76,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_26_i: {
    column: 110,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_27: {
    column: 77,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_27_i: {
    column: 111,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_28: {
    column: 78,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_28_i: {
    column: 112,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_29: {
    column: 79,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_29_i: {
    column: 113,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_30: {
    column: 80,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_30_i: {
    column: 114,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_31: {
    column: 81,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_31_i: {
    column: 115,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_32: {
    column: 82,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_32_i: {
    column: 116,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_33: {
    column: 83,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_33_i: {
    column: 117,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_34: {
    column: 84,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_34_i: {
    column: 118,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_35: {
    column: 85,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_35_i: {
    column: 746,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_36: {
    column: 86,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_36_i: {
    column: 119,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_37: {
    column: 87,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_37_i: {
    column: 120,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_38: {
    column: 88,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_38_i: {
    column: 121,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEM_39: {
    column: 2,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEO_1: {
    column: 316,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEO_2: {
    column: 317,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEO_3: {
    column: 318,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEO_4: {
    column: 319,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEO_5: {
    column: 320,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEO_6: {
    column: 322,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEO_7: {
    column: 321,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEO_8: {
    column: 327,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEO_9: {
    column: 328,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEO_10: {
    column: 323,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEO_11: {
    column: 324,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEO_12: {
    column: 325,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  LEO_13: {
    column: 326,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  PLACE: {
    column: 148,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  SHR_1: {
    column: 147,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  SIE_1: {
    column: 733,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  SIE_2: {
    column: 734,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  SIE_3: {
    column: 735,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  SIE_4: {
    column: 736,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  SIE_5: {
    column: 737,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  SIE_6: {
    column: 738,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  SIE_7: {
    column: 739,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  SIE_8: {
    column: 740,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  SIE_9: {
    column: 741,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_1: {
    column: 122,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_2: {
    column: 123,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_3: {
    column: 124,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_4: {
    column: 125,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_5: {
    column: 126,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_6: {
    column: 127,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_7: {
    column: 128,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_8: {
    column: 129,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_9: {
    column: 130,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_10: {
    column: 131,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_11: {
    column: 132,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_12: {
    column: 133,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_13: {
    column: 134,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_14: {
    column: 135,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_15: {
    column: 136,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_16: {
    column: 137,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_17: {
    column: 138,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_18: {
    column: 139,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_19: {
    column: 140,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_20: {
    column: 141,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_21: {
    column: 142,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_22: {
    column: 143,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_23: {
    column: 144,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_24: {
    column: 145,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_25: {
    column: 146,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  UCR_26: {
    column: 3,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  VIC_1: {
    column: 307,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  VIC_2: {
    column: 308,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  VIC_3: {
    column: 309,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  VIC_4: {
    column: 310,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  VIC_5: {
    column: 311,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  VIC_6: {
    column: 312,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  VIC_7: {
    column: 313,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  VIC_8: {
    column: 314,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  VIC_9: {
    column: 315,
    is_required: false,
    model_field: '',
    model_name: '',
    model_type: ''
  },
  XWK_1: {
    column: 4,
    is_required: true,
    model_field: 'ori9',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_2: {
    column: 9,
    is_required: true,
    model_field: 'ori9_imp',
    model_name: 'Agency',
    model_type: 'boolean'
  },
  XWK_3: {
    column: 1,
    is_required: true,
    model_field: 'ori7',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_4: {
    column: 10,
    is_required: true,
    model_field: 'ori7_imp',
    model_name: 'Agency',
    model_type: 'boolean'
  },
  XWK_5: {
    column: 5,
    is_required: false,
    model_field: 'ori_fbi',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_6: {
    column: 6,
    is_required: true,
    model_field: 'source_year',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_7: {
    column: 7,
    is_required: false,
    model_field: 'source_name',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_8: {
    column: 8,
    is_required: false,
    model_field: null,
    model_name: null,
    model_type: null
  },
  XWK_9: {
    column: 11,
    is_required: false,
    model_field: null,
    model_name: null,
    model_type: null
  },
  XWK_10: {
    column: 12,
    is_required: false,
    model_field: null,
    model_name: null,
    model_type: null
  },
  XWK_11: {
    column: 13,
    is_required: true,
    model_field: 'fips_place_code',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_12: {
    column: 14,
    is_required: true,
    model_field: 'fips_state_code',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_13: {
    column: 15,
    is_required: true,
    model_field: 'fips_county_code',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_14: {
    column: 16,
    is_required: false,
    model_field: null,
    model_name: null,
    model_type: null
  },
  XWK_15: {
    column: 17,
    is_required: true,
    model_field: 'agency_name',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_16: {
    column: 18,
    is_required: true,
    model_field: 'urban_code',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_17: {
    column: 19,
    is_required: true,
    model_field: 'geo_state_name',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_18: {
    column: 20,
    is_required: true,
    model_field: 'geo_county_name',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_19: {
    column: 21,
    is_required: false,
    model_field: 'urban_name',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_20: {
    column: 22,
    is_required: true,
    model_field: 'is_sub_agency',
    model_name: 'Agency',
    model_type: 'boolean'
  },
  XWK_21: {
    column: 23,
    is_required: true,
    model_field: 'agency_type',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_22: {
    column: 24,
    is_required: true,
    model_field: 'agency_sub_type_1',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_23: {
    column: 25,
    is_required: true,
    model_field: 'agency_sub_type_2',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_24: {
    column: 26,
    is_required: true,
    model_field: 'government_id',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_25: {
    column: 27,
    is_required: true,
    model_field: 'census_name',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_26: {
    column: 28,
    is_required: true,
    model_field: 'address_name',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_27: {
    column: 29,
    is_required: true,
    model_field: 'address_street_1',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_28: {
    column: 30,
    is_required: false,
    model_field: 'address_street_2',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_29: {
    column: 31,
    is_required: true,
    model_field: 'address_city',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_30: {
    column: 32,
    is_required: true,
    model_field: 'address_state',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_31: {
    column: 33,
    is_required: false,
    model_field: 'address_zip_code',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_32: {
    column: 34,
    is_required: true,
    model_field: 'reported_offenses',
    model_name: 'Agency',
    model_type: 'boolean'
  },
  XWK_33: {
    column: 35,
    is_required: false,
    model_field: 'csllea_agency_id',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_34: {
    column: 36,
    is_required: false,
    model_field: 'lemas_files_id',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_35: {
    column: 37,
    is_required: false,
    model_field: 'ucr_state_code',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_36: {
    column: 38,
    is_required: false,
    model_field: 'ucr_county_code',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_37: {
    column: 39,
    is_required: false,
    model_field: 'group_number',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_38: {
    column: 40,
    is_required: false,
    model_field: 'ucr_population',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_39: {
    column: 41,
    is_required: false,
    model_field: 'census_population',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_40: {
    column: 42,
    is_required: true,
    model_field: 'leaic_subset_flag',
    model_name: 'Agency',
    model_type: 'boolean'
  },
  XWK_41: {
    column: 43,
    is_required: false,
    model_field: 'comments',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_42: {
    column: 44,
    is_required: true,
    model_field: 'geo_latitude',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_43: {
    column: 45,
    is_required: true,
    model_field: 'geo_longitude',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_44: {
    column: 46,
    is_required: false,
    model_field: 'district',
    model_name: 'Agency',
    model_type: 'number'
  },
  XWK_45: {
    column: 47,
    is_required: false,
    model_field: 'districts',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_46: {
    column: 48,
    is_required: true,
    model_field: 'district_name',
    model_name: 'Agency',
    model_type: 'string'
  },
  XWK_47: {
    column: 49,
    is_required: true,
    model_field: 'source_csllea_2008',
    model_name: 'Agency',
    model_type: 'boolean'
  },
  XWK_48: {
    column: 50,
    is_required: true,
    model_field: 'source_ucr_2010',
    model_name: 'Agency',
    model_type: 'boolean'
  },
  XWK_49: {
    column: 51,
    is_required: true,
    model_field: 'source_ucr_2011',
    model_name: 'Agency',
    model_type: 'boolean'
  },
  XWK_50: {
    column: 52,
    is_required: true,
    model_field: 'source_ucr_2012',
    model_name: 'Agency',
    model_type: 'boolean'
  },
  XWK_51: {
    column: 53,
    is_required: true,
    model_field: 'source_ncic_2012',
    model_name: 'Agency',
    model_type: 'boolean'
  },
  XWK_52: {
    column: 54,
    is_required: true,
    model_field: 'source_vendor_2012',
    model_name: 'Agency',
    model_type: 'boolean'
  }
}

module.exports = () => {
  /**
   * Fetch CSV Headers from Mappings Object
   */
  const headers = Object.keys(mappings)

  /**
   * @param {string} name Model Name to Fetch Mapping Details ( uses: `mappings.model_name` )
   * @param {string} format Format to Output ( default is JSON, `table` renders Markdown table, handy for documentation )
   */
  const getModelMapping = (name, format) => {
    return new Promise(resolve => {
      let matches = {}

      headers.forEach(key => {
        if (mappings[key].model_name && mappings[key].model_name.toLowerCase() === name.toLowerCase()) {
          matches[key] = mappings[key]
          matches[key].column_letter = numberToLetters(matches[key].column - 1)

          matches[key] = keyArrange(matches[key])
        }
      })

      if (format && format === 'table') {
        let table = '\n| CSV Column | CSV Header       | Model Name       | Model Field              | Model Type | Required |\n'
        table += '|------------|------------------|------------------|--------------------------|------------|:--------:|\n'

        const matchKeys = Object.keys(matches)
        matchKeys.forEach(key => {
          table += `| ${(matches[key].column_letter + ' / ' + matches[key].column).padEnd(10, ' ')} | ${('`' + key + '`').padEnd(16, ' ')} | ${matches[key].model_name.padEnd(16, ' ')} | ${('`' + matches[key].model_field + '`').padEnd(24, ' ')} | ${matches[key].model_type.padEnd(10, ' ')} | ${(matches[key].is_required ? '✓' : ' ').padEnd(8, ' ')} |\n`
        })

        resolve(table)
      } else {
        resolve(matches)
      }
    })
  }

  /**
   * Converts CSV Column Number to Column Letter
   * @param {number} num CSV Column Number
   */
  const numberToLetters = num => {
    let letters = ''
    while (num >= 0) {
      letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26] + letters
      num = Math.floor(num / 26) - 1
    }

    return letters
  }

  /**
   * Return Module Functions
   */
  return {
    getModelMapping,
    headers,
    numberToLetters
  }
}
