class Transform {
    get value() {
        return this.val;
    }
    set(value) {
        this.val = value;
        return this;
    }
}

function getVal(paths, data) {
    if (!paths)
        return data;
    const pathArray = Array.isArray(paths) ? paths : paths.split(".");
    let res = data, path;
    while (pathArray.length) {
        if (Object.prototype.toString.call(res) !== "[object Object]" && Object.prototype.toString.call(res) !== "[object Array]")
            return res;
        path = pathArray.shift();
        res = res[path];
    }
    return res;
}
const JTUtil = {
    getVal,
    appendAfter(val, ...after) {
        return val + after.join("");
    },
    toString(val) {
        return String(val);
    },
    toNumber(val) {
        return Number(val);
    },
    replace(val, oldStr, newStr) {
        return String(val).replace(oldStr, newStr);
    },
    concat(...val) {
        return val.join("");
    }
};

class StringChain extends Transform {
    constructor(value) {
        super();
        this.val = "";
        if (value) {
            this.val = String(value);
        }
    }
    appendAfter(...after) {
        this.val = JTUtil.appendAfter(this.value, ...after);
        return this;
    }
    toNumber() {
        return new NumberChain(this.val);
    }
}

class NumberChain extends Transform {
    constructor(value) {
        super();
        if (value) {
            this.val = Number(value);
        }
    }
    toString() {
        return new StringChain(this.val);
    }
}

var NumberChain$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': NumberChain
});

class ObjectChain extends Transform {
    constructor(value) {
        super();
        this.val = {};
        if (value) {
            this.val = value;
        }
    }
    toString() {
        //
    }
}

console.log(new NumberChain(1).toString());
function number(value) {
    return new NumberChain(value);
}
function string(value) {
    return new StringChain(value);
}
function object(value) {
    return new ObjectChain(value);
}

export { NumberChain$1 as NumberChain, number, object, string };
//# sourceMappingURL=index.esm.js.map
