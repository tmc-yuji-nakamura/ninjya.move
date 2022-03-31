'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// Please don't delete the 'use strict' line above

function test(actual, expected) {
  if (_.isEqual(actual, expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}