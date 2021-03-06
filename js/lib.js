! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var i = [],
        n = e.document,
        r = Object.getPrototypeOf,
        a = i.slice,
        s = i.concat,
        o = i.push,
        l = i.indexOf,
        c = {},
        u = c.toString,
        d = c.hasOwnProperty,
        h = d.toString,
        p = h.call(Object),
        f = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        v = function(e) {
            return null != e && e === e.window
        },
        g = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function y(e, t, i) {
        var r, a = (t = t || n).createElement("script");
        if (a.text = e, i)
            for (r in g) i[r] && (a[r] = i[r]);
        t.head.appendChild(a).parentNode.removeChild(a)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }
    var w = "3.3.1",
        x = function(e, t) {
            return new x.fn.init(e, t)
        },
        E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function T(e) {
        var t = !!e && "length" in e && e.length,
            i = b(e);
        return !m(e) && !v(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: w,
        constructor: x,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: o,
        sort: i.sort,
        splice: i.splice
    }, x.extend = x.fn.extend = function() {
        var e, t, i, n, r, a, s = arguments[0] || {},
            o = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[o] || {}, o++), "object" == typeof s || m(s) || (s = {}), o === l && (s = this, o--); o < l; o++)
            if (null != (e = arguments[o]))
                for (t in e) i = s[t], s !== (n = e[t]) && (c && n && (x.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, a = i && Array.isArray(i) ? i : []) : a = i && x.isPlainObject(i) ? i : {}, s[t] = x.extend(c, a, n)) : void 0 !== n && (s[t] = n));
        return s
    }, x.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== u.call(e)) && (!(t = r(e)) || "function" == typeof(i = d.call(t, "constructor") && t.constructor) && h.call(i) === p)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            y(e)
        },
        each: function(e, t) {
            var i, n = 0;
            if (T(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(E, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (T(Object(e)) ? x.merge(i, "string" == typeof e ? [e] : e) : o.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : l.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n];
            return e.length = r, e
        },
        grep: function(e, t, i) {
            for (var n = [], r = 0, a = e.length, s = !i; r < a; r++) !t(e[r], r) !== s && n.push(e[r]);
            return n
        },
        map: function(e, t, i) {
            var n, r, a = 0,
                o = [];
            if (T(e))
                for (n = e.length; a < n; a++) null != (r = t(e[a], a, i)) && o.push(r);
            else
                for (a in e) null != (r = t(e[a], a, i)) && o.push(r);
            return s.apply([], o)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = i[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var C = function(e) {
        var t, i, n, r, a, s, o, l, c, u, d, h, p, f, m, v, g, y, b, w = "sizzle" + 1 * new Date,
            x = e.document,
            E = 0,
            T = 0,
            C = se(),
            _ = se(),
            S = se(),
            k = function(e, t) {
                return e === t && (d = !0), 0
            },
            A = {}.hasOwnProperty,
            D = [],
            I = D.pop,
            M = D.push,
            P = D.push,
            O = D.slice,
            N = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            z = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            H = "\\[" + z + "*(" + j + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + z + "*\\]",
            R = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            $ = new RegExp(z + "+", "g"),
            q = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
            B = new RegExp("^" + z + "*," + z + "*"),
            F = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
            W = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"),
            Y = new RegExp(R),
            V = new RegExp("^" + j + "$"),
            G = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            U = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
            ee = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ne = function() {
                h()
            },
            re = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            P.apply(D = O.call(x.childNodes), x.childNodes), D[x.childNodes.length].nodeType
        } catch (e) {
            P = {
                apply: D.length ? function(e, t) {
                    M.apply(e, O.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function ae(e, t, n, r) {
            var a, o, c, u, d, f, g, y = t && t.ownerDocument,
                E = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return n;
            if (!r && ((t ? t.ownerDocument || t : x) !== p && h(t), t = t || p, m)) {
                if (11 !== E && (d = Q.exec(e)))
                    if (a = d[1]) {
                        if (9 === E) {
                            if (!(c = t.getElementById(a))) return n;
                            if (c.id === a) return n.push(c), n
                        } else if (y && (c = y.getElementById(a)) && b(t, c) && c.id === a) return n.push(c), n
                    } else {
                        if (d[2]) return P.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = d[3]) && i.getElementsByClassName && t.getElementsByClassName) return P.apply(n, t.getElementsByClassName(a)), n
                    }
                if (i.qsa && !S[e + " "] && (!v || !v.test(e))) {
                    if (1 !== E) y = t, g = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(te, ie) : t.setAttribute("id", u = w), o = (f = s(e)).length; o--;) f[o] = "#" + u + " " + ge(f[o]);
                        g = f.join(","), y = J.test(e) && me(t.parentNode) || t
                    }
                    if (g) try {
                        return P.apply(n, y.querySelectorAll(g)), n
                    } catch (e) {} finally {
                        u === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(q, "$1"), t, n, r)
        }

        function se() {
            var e = [];
            return function t(i, r) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = r
            }
        }

        function oe(e) {
            return e[w] = !0, e
        }

        function le(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var i = e.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = t
        }

        function ue(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function fe(e) {
            return oe(function(t) {
                return t = +t, oe(function(i, n) {
                    for (var r, a = e([], i.length, t), s = a.length; s--;) i[r = a[s]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in i = ae.support = {}, a = ae.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, h = ae.setDocument = function(e) {
                var t, r, s = e ? e.ownerDocument || e : x;
                return s !== p && 9 === s.nodeType && s.documentElement ? (f = (p = s).documentElement, m = !a(p), x !== p && (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ne, !1) : r.attachEvent && r.attachEvent("onunload", ne)), i.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), i.getElementsByTagName = le(function(e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                }), i.getElementsByClassName = K.test(p.getElementsByClassName), i.getById = le(function(e) {
                    return f.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                }), i.getById ? (n.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }) : (n.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var i, n, r, a = t.getElementById(e);
                        if (a) {
                            if ((i = a.getAttributeNode("id")) && i.value === e) return [a];
                            for (r = t.getElementsByName(e), n = 0; a = r[n++];)
                                if ((i = a.getAttributeNode("id")) && i.value === e) return [a]
                        }
                        return []
                    }
                }), n.find.TAG = i.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var i, n = [],
                        r = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = a[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return a
                }, n.find.CLASS = i.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, g = [], v = [], (i.qsa = K.test(p.querySelectorAll)) && (le(function(e) {
                    f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + z + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + z + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + w + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + z + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (i.matchesSelector = K.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && le(function(e) {
                    i.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), g.push("!=", R)
                }), v = v.length && new RegExp(v.join("|")), g = g.length && new RegExp(g.join("|")), t = K.test(f.compareDocumentPosition), b = t || K.test(f.contains) ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, k = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === p || e.ownerDocument === x && b(x, e) ? -1 : t === p || t.ownerDocument === x && b(x, t) ? 1 : u ? N(u, e) - N(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var i, n = 0,
                        r = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        o = [t];
                    if (!r || !a) return e === p ? -1 : t === p ? 1 : r ? -1 : a ? 1 : u ? N(u, e) - N(u, t) : 0;
                    if (r === a) return ue(e, t);
                    for (i = e; i = i.parentNode;) s.unshift(i);
                    for (i = t; i = i.parentNode;) o.unshift(i);
                    for (; s[n] === o[n];) n++;
                    return n ? ue(s[n], o[n]) : s[n] === x ? -1 : o[n] === x ? 1 : 0
                }, p) : p
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && h(e), t = t.replace(W, "='$1']"), i.matchesSelector && m && !S[t + " "] && (!g || !g.test(t)) && (!v || !v.test(t))) try {
                    var n = y.call(e, t);
                    if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return ae(t, p, null, [e]).length > 0
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && h(e), b(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) !== p && h(e);
                var r = n.attrHandle[t.toLowerCase()],
                    a = r && A.call(n.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
                return void 0 !== a ? a : i.attributes || !m ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(te, ie)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    a = 0;
                if (d = !i.detectDuplicates, u = !i.sortStable && e.slice(0), e.sort(k), d) {
                    for (; t = e[a++];) t === e[a] && (r = n.push(a));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
            }, r = ae.getText = function(e) {
                var t, i = "",
                    n = 0,
                    a = e.nodeType;
                if (a) {
                    if (1 === a || 9 === a || 11 === a) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += r(e)
                    } else if (3 === a || 4 === a) return e.nodeValue
                } else
                    for (; t = e[n++];) i += r(t);
                return i
            }, (n = ae.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && Y.test(i) && (t = s(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = C[e + " "];
                        return t || (t = new RegExp("(^|" + z + ")" + e + "(" + z + "|$)")) && C(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, i) {
                        return function(n) {
                            var r = ae.attr(n, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? (" " + r.replace($, " ") + " ").indexOf(i) > -1 : "|=" === t && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, i, n, r) {
                        var a = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === n && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, i, l) {
                            var c, u, d, h, p, f, m = a !== s ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                g = o && t.nodeName.toLowerCase(),
                                y = !l && !o,
                                b = !1;
                            if (v) {
                                if (a) {
                                    for (; m;) {
                                        for (h = t; h = h[m];)
                                            if (o ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? v.firstChild : v.lastChild], s && y) {
                                    for (b = (p = (c = (u = (d = (h = v)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === E && c[1]) && c[2], h = p && v.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();)
                                        if (1 === h.nodeType && ++b && h === t) {
                                            u[e] = [E, p, b];
                                            break
                                        }
                                } else if (y && (b = p = (c = (u = (d = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === E && c[1]), !1 === b)
                                    for (;
                                        (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [E, b]), h !== t)););
                                return (b -= r) === n || b % n == 0 && b / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var i, r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return r[w] ? r(t) : r.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, i) {
                            for (var n, a = r(e, t), s = a.length; s--;) e[n = N(e, a[s])] = !(i[n] = a[s])
                        }) : function(e) {
                            return r(e, 0, i)
                        }) : r
                    }
                },
                pseudos: {
                    not: oe(function(e) {
                        var t = [],
                            i = [],
                            n = o(e.replace(q, "$1"));
                        return n[w] ? oe(function(e, t, i, r) {
                            for (var a, s = n(e, null, r, []), o = e.length; o--;)(a = s[o]) && (e[o] = !(t[o] = a))
                        }) : function(e, r, a) {
                            return t[0] = e, n(t, null, a, i), t[0] = null, !i.pop()
                        }
                    }),
                    has: oe(function(e) {
                        return function(t) {
                            return ae(e, t).length > 0
                        }
                    }),
                    contains: oe(function(e) {
                        return e = e.replace(Z, ee),
                            function(t) {
                                return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                            }
                    }),
                    lang: oe(function(e) {
                        return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                            function(t) {
                                var i;
                                do {
                                    if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === f
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: pe(!1),
                    disabled: pe(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !n.pseudos.empty(e)
                    },
                    header: function(e) {
                        return U.test(e.nodeName)
                    },
                    input: function(e) {
                        return X.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: fe(function() {
                        return [0]
                    }),
                    last: fe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: fe(function(e, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: fe(function(e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e
                    }),
                    odd: fe(function(e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e
                    }),
                    lt: fe(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n);
                        return e
                    }),
                    gt: fe(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                        return e
                    })
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[t] = de(t);
        for (t in {
                submit: !0,
                reset: !0
            }) n.pseudos[t] = he(t);

        function ve() {}

        function ge(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function ye(e, t, i) {
            var n = t.dir,
                r = t.next,
                a = r || n,
                s = i && "parentNode" === a,
                o = T++;
            return t.first ? function(t, i, r) {
                for (; t = t[n];)
                    if (1 === t.nodeType || s) return e(t, i, r);
                return !1
            } : function(t, i, l) {
                var c, u, d, h = [E, o];
                if (l) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || s) && e(t, i, l)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || s)
                            if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[n] || t;
                            else {
                                if ((c = u[a]) && c[0] === E && c[1] === o) return h[2] = c[2];
                                if (u[a] = h, h[2] = e(t, i, l)) return !0
                            } return !1
            }
        }

        function be(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var r = e.length; r--;)
                    if (!e[r](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function we(e, t, i, n, r) {
            for (var a, s = [], o = 0, l = e.length, c = null != t; o < l; o++)(a = e[o]) && (i && !i(a, n, r) || (s.push(a), c && t.push(o)));
            return s
        }

        function xe(e, t, i, n, r, a) {
            return n && !n[w] && (n = xe(n)), r && !r[w] && (r = xe(r, a)), oe(function(a, s, o, l) {
                var c, u, d, h = [],
                    p = [],
                    f = s.length,
                    m = a || function(e, t, i) {
                        for (var n = 0, r = t.length; n < r; n++) ae(e, t[n], i);
                        return i
                    }(t || "*", o.nodeType ? [o] : o, []),
                    v = !e || !a && t ? m : we(m, h, e, o, l),
                    g = i ? r || (a ? e : f || n) ? [] : s : v;
                if (i && i(v, g, o, l), n)
                    for (c = we(g, p), n(c, [], o, l), u = c.length; u--;)(d = c[u]) && (g[p[u]] = !(v[p[u]] = d));
                if (a) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = g.length; u--;)(d = g[u]) && c.push(v[u] = d);
                            r(null, g = [], c, l)
                        }
                        for (u = g.length; u--;)(d = g[u]) && (c = r ? N(a, d) : h[u]) > -1 && (a[c] = !(s[c] = d))
                    }
                } else g = we(g === s ? g.splice(f, g.length) : g), r ? r(null, s, g, l) : P.apply(s, g)
            })
        }

        function Ee(e) {
            for (var t, i, r, a = e.length, s = n.relative[e[0].type], o = s || n.relative[" "], l = s ? 1 : 0, u = ye(function(e) {
                    return e === t
                }, o, !0), d = ye(function(e) {
                    return N(t, e) > -1
                }, o, !0), h = [function(e, i, n) {
                    var r = !s && (n || i !== c) || ((t = i).nodeType ? u(e, i, n) : d(e, i, n));
                    return t = null, r
                }]; l < a; l++)
                if (i = n.relative[e[l].type]) h = [ye(be(h), i)];
                else {
                    if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (r = ++l; r < a && !n.relative[e[r].type]; r++);
                        return xe(l > 1 && be(h), l > 1 && ge(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(q, "$1"), i, l < r && Ee(e.slice(l, r)), r < a && Ee(e = e.slice(r)), r < a && ge(e))
                    }
                    h.push(i)
                }
            return be(h)
        }
        return ve.prototype = n.filters = n.pseudos, n.setFilters = new ve, s = ae.tokenize = function(e, t) {
            var i, r, a, s, o, l, c, u = _[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (o = e, l = [], c = n.preFilter; o;) {
                for (s in i && !(r = B.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(a = [])), i = !1, (r = F.exec(o)) && (i = r.shift(), a.push({
                        value: i,
                        type: r[0].replace(q, " ")
                    }), o = o.slice(i.length)), n.filter) !(r = G[s].exec(o)) || c[s] && !(r = c[s](r)) || (i = r.shift(), a.push({
                    value: i,
                    type: s,
                    matches: r
                }), o = o.slice(i.length));
                if (!i) break
            }
            return t ? o.length : o ? ae.error(e) : _(e, l).slice(0)
        }, o = ae.compile = function(e, t) {
            var i, r, a, o, l, u, d = [],
                f = [],
                v = S[e + " "];
            if (!v) {
                for (t || (t = s(e)), i = t.length; i--;)(v = Ee(t[i]))[w] ? d.push(v) : f.push(v);
                (v = S(e, (r = f, o = (a = d).length > 0, l = r.length > 0, u = function(e, t, i, s, u) {
                    var d, f, v, g = 0,
                        y = "0",
                        b = e && [],
                        w = [],
                        x = c,
                        T = e || l && n.find.TAG("*", u),
                        C = E += null == x ? 1 : Math.random() || .1,
                        _ = T.length;
                    for (u && (c = t === p || t || u); y !== _ && null != (d = T[y]); y++) {
                        if (l && d) {
                            for (f = 0, t || d.ownerDocument === p || (h(d), i = !m); v = r[f++];)
                                if (v(d, t || p, i)) {
                                    s.push(d);
                                    break
                                }
                            u && (E = C)
                        }
                        o && ((d = !v && d) && g--, e && b.push(d))
                    }
                    if (g += y, o && y !== g) {
                        for (f = 0; v = a[f++];) v(b, w, t, i);
                        if (e) {
                            if (g > 0)
                                for (; y--;) b[y] || w[y] || (w[y] = I.call(s));
                            w = we(w)
                        }
                        P.apply(s, w), u && !e && w.length > 0 && g + a.length > 1 && ae.uniqueSort(s)
                    }
                    return u && (E = C, c = x), b
                }, o ? oe(u) : u))).selector = e
            }
            return v
        }, l = ae.select = function(e, t, i, r) {
            var a, l, c, u, d, h = "function" == typeof e && e,
                p = !r && s(e = h.selector || e);
            if (i = i || [], 1 === p.length) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
                    if (!(t = (n.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return i;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (a = G.needsContext.test(e) ? 0 : l.length; a-- && (c = l[a], !n.relative[u = c.type]);)
                    if ((d = n.find[u]) && (r = d(c.matches[0].replace(Z, ee), J.test(l[0].type) && me(t.parentNode) || t))) {
                        if (l.splice(a, 1), !(e = r.length && ge(l))) return P.apply(i, r), i;
                        break
                    }
            }
            return (h || o(e, p))(r, t, !m, i, !t || J.test(e) && me(t.parentNode) || t), i
        }, i.sortStable = w.split("").sort(k).join("") === w, i.detectDuplicates = !!d, h(), i.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), i.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(L, function(e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), ae
    }(e);
    x.find = C, x.expr = C.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = C.uniqueSort, x.text = C.getText, x.isXMLDoc = C.isXML, x.contains = C.contains, x.escapeSelector = C.escape;
    var _ = function(e, t, i) {
            for (var n = [], r = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && x(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        S = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        k = x.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(e, t, i) {
        return m(t) ? x.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        }) : t.nodeType ? x.grep(e, function(e) {
            return e === t !== i
        }) : "string" != typeof t ? x.grep(e, function(e) {
            return l.call(t, e) > -1 !== i
        }) : x.filter(t, e, i)
    }
    x.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? x.find.matchesSelector(n, e) ? [n] : [] : x.find.matches(e, x.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, x.fn.extend({
        find: function(e) {
            var t, i, n = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (x.contains(r[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; t < n; t++) x.find(e, r[t], i);
            return n > 1 ? x.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(I(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(I(this, e || [], !0))
        },
        is: function(e) {
            return !!I(this, "string" == typeof e && k.test(e) ? x(e) : e || [], !1).length
        }
    });
    var M, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, i) {
        var r, a;
        if (!e) return this;
        if (i = i || M, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : n, !0)), D.test(r[1]) && x.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (a = n.getElementById(r[2])) && (this[0] = a, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== i.ready ? i.ready(e) : e(x) : x.makeArray(e, this)
    }).prototype = x.fn, M = x(n);
    var O = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (x.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0,
                r = this.length,
                a = [],
                s = "string" != typeof e && x(e);
            if (!k.test(e))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && x.find.matchesSelector(i, e))) {
                            a.push(i);
                            break
                        }
            return this.pushStack(a.length > 1 ? x.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(x(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return _(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return _(e, "parentNode", i)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return _(e, "nextSibling")
        },
        prevAll: function(e) {
            return _(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return _(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return _(e, "previousSibling", i)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return A(e, "iframe") ? e.contentDocument : (A(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, function(e, t) {
        x.fn[e] = function(i, n) {
            var r = x.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = x.filter(n, r)), this.length > 1 && (N[e] || x.uniqueSort(r), O.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var z = /[^\x20\t\r\n\f]+/g;

    function j(e) {
        return e
    }

    function H(e) {
        throw e
    }

    function R(e, t, i, n) {
        var r;
        try {
            e && m(r = e.promise) ? r.call(e).done(t).fail(i) : e && m(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    x.Callbacks = function(e) {
        var t, i;
        e = "string" == typeof e ? (t = e, i = {}, x.each(t.match(z) || [], function(e, t) {
            i[t] = !0
        }), i) : x.extend({}, e);
        var n, r, a, s, o = [],
            l = [],
            c = -1,
            u = function() {
                for (s = s || e.once, a = n = !0; l.length; c = -1)
                    for (r = l.shift(); ++c < o.length;) !1 === o[c].apply(r[0], r[1]) && e.stopOnFalse && (c = o.length, r = !1);
                e.memory || (r = !1), n = !1, s && (o = r ? [] : "")
            },
            d = {
                add: function() {
                    return o && (r && !n && (c = o.length - 1, l.push(r)), function t(i) {
                        x.each(i, function(i, n) {
                            m(n) ? e.unique && d.has(n) || o.push(n) : n && n.length && "string" !== b(n) && t(n)
                        })
                    }(arguments), r && !n && u()), this
                },
                remove: function() {
                    return x.each(arguments, function(e, t) {
                        for (var i;
                            (i = x.inArray(t, o, i)) > -1;) o.splice(i, 1), i <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? x.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return s = l = [], o = r = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return s = l = [], r || n || (o = r = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), n || u()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return d
    }, x.extend({
        Deferred: function(t) {
            var i = [
                    ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                    ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return x.Deferred(function(t) {
                            x.each(i, function(i, n) {
                                var r = m(e[n[4]]) && e[n[4]];
                                a[n[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var a = 0;

                        function s(t, i, n, r) {
                            return function() {
                                var o = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < a)) {
                                            if ((e = n.apply(o, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, m(c) ? r ? c.call(e, s(a, i, j, r), s(a, i, H, r)) : (a++, c.call(e, s(a, i, j, r), s(a, i, H, r), s(a, i, j, i.notifyWith))) : (n !== j && (o = void 0, l = [e]), (r || i.resolveWith)(o, l))
                                        }
                                    },
                                    u = r ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= a && (n !== H && (o = void 0, l = [e]), i.rejectWith(o, l))
                                        }
                                    };
                                t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return x.Deferred(function(e) {
                            i[0][3].add(s(0, e, m(r) ? r : j, e.notifyWith)), i[1][3].add(s(0, e, m(t) ? t : j)), i[2][3].add(s(0, e, m(n) ? n : H))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, r) : r
                    }
                },
                a = {};
            return x.each(i, function(e, t) {
                var s = t[2],
                    o = t[5];
                r[t[1]] = s.add, o && s.add(function() {
                    n = o
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), s.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = s.fireWith
            }), r.promise(a), t && t.call(a, a), a
        },
        when: function(e) {
            var t = arguments.length,
                i = t,
                n = Array(i),
                r = a.call(arguments),
                s = x.Deferred(),
                o = function(e) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? a.call(arguments) : i, --t || s.resolveWith(n, r)
                    }
                };
            if (t <= 1 && (R(e, s.done(o(i)).resolve, s.reject, !t), "pending" === s.state() || m(r[i] && r[i].then))) return s.then();
            for (; i--;) R(r[i], o(i), s.reject);
            return s.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(t, i) {
        e.console && e.console.warn && t && $.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }, x.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var q = x.Deferred();

    function B() {
        n.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), x.ready()
    }
    x.fn.ready = function(e) {
        return q.then(e).catch(function(e) {
            x.readyException(e)
        }), this
    }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || q.resolveWith(n, [x]))
        }
    }), x.ready.then = q.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? e.setTimeout(x.ready) : (n.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
    var F = function(e, t, i, n, r, a, s) {
            var o = 0,
                l = e.length,
                c = null == i;
            if ("object" === b(i))
                for (o in r = !0, i) F(e, t, o, i[o], !0, a, s);
            else if (void 0 !== n && (r = !0, m(n) || (s = !0), c && (s ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                    return c.call(x(e), i)
                })), t))
                for (; o < l; o++) t(e[o], i, s ? n : n.call(e[o], o, t(e[o], i)));
            return r ? e : c ? t.call(e) : l ? t(e[0], i) : a
        },
        W = /^-ms-/,
        Y = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(W, "ms-").replace(Y, V)
    }
    var X = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function U() {
        this.expando = x.expando + U.uid++
    }
    U.uid = 1, U.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, r = this.cache(e);
            if ("string" == typeof t) r[G(t)] = i;
            else
                for (n in t) r[G(n)] = t[n];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in n ? [t] : t.match(z) || []).length;
                    for (; i--;) delete n[t[i]]
                }(void 0 === t || x.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var K = new U,
        Q = new U,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, i) {
        var n, r;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : J.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                Q.set(e, t, i)
            } else i = void 0;
        return i
    }
    x.extend({
        hasData: function(e) {
            return Q.hasData(e) || K.hasData(e)
        },
        data: function(e, t, i) {
            return Q.access(e, t, i)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, i) {
            return K.access(e, t, i)
        },
        _removeData: function(e, t) {
            K.remove(e, t)
        }
    }), x.fn.extend({
        data: function(e, t) {
            var i, n, r, a = this[0],
                s = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (r = Q.get(a), 1 === a.nodeType && !K.get(a, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = G(n.slice(5)), ee(a, n, r[n]));
                    K.set(a, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Q.set(this, e)
            }) : F(this, function(t) {
                var i;
                if (a && void 0 === t) return void 0 !== (i = Q.get(a, e)) ? i : void 0 !== (i = ee(a, e)) ? i : void 0;
                this.each(function() {
                    Q.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), x.extend({
        queue: function(e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = K.get(e, t), i && (!n || Array.isArray(i) ? n = K.access(e, t, x.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = x.queue(e, t),
                n = i.length,
                r = i.shift(),
                a = x._queueHooks(e, t);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete a.stop, r.call(e, function() {
                x.dequeue(e, t)
            }, a)), !n && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return K.get(e, i) || K.access(e, i, {
                empty: x.Callbacks("once memory").add(function() {
                    K.remove(e, [t + "queue", i])
                })
            })
        }
    }), x.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? x.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                r = x.Deferred(),
                a = this,
                s = this.length,
                o = function() {
                    --n || r.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = K.get(a[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
            return o(), r.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && x.contains(e.ownerDocument, e) && "none" === x.css(e, "display")
        },
        ae = function(e, t, i, n) {
            var r, a, s = {};
            for (a in t) s[a] = e.style[a], e.style[a] = t[a];
            for (a in r = i.apply(e, n || []), t) e.style[a] = s[a];
            return r
        };

    function se(e, t, i, n) {
        var r, a, s = 20,
            o = n ? function() {
                return n.cur()
            } : function() {
                return x.css(e, t, "")
            },
            l = o(),
            c = i && i[3] || (x.cssNumber[t] ? "" : "px"),
            u = (x.cssNumber[t] || "px" !== c && +l) && ie.exec(x.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) x.style(e, t, u + c), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (s = 0), u /= a;
            u *= 2, x.style(e, t, u + c), i = i || []
        }
        return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r
    }
    var oe = {};

    function le(e, t) {
        for (var i, n, r, a, s, o, l, c = [], u = 0, d = e.length; u < d; u++)(n = e[u]).style && (i = n.style.display, t ? ("none" === i && (c[u] = K.get(n, "display") || null, c[u] || (n.style.display = "")), "" === n.style.display && re(n) && (c[u] = (a = void 0, s = void 0, void 0, l = void 0, s = (r = n).ownerDocument, o = r.nodeName, (l = oe[o]) || (a = s.body.appendChild(s.createElement(o)), l = x.css(a, "display"), a.parentNode.removeChild(a), "none" === l && (l = "block"), oe[o] = l, l)))) : "none" !== i && (c[u] = "none", K.set(n, "display", i)));
        for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }
    x.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                re(this) ? x(this).show() : x(this).hide()
            })
        }
    });
    var ce = /^(?:checkbox|radio)$/i,
        ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        de = /^$|^module$|\/(?:java|ecma)script/i,
        he = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function pe(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? x.merge([e], i) : i
    }

    function fe(e, t) {
        for (var i = 0, n = e.length; i < n; i++) K.set(e[i], "globalEval", !t || K.get(t[i], "globalEval"))
    }
    he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
    var me, ve, ge = /<|&#?\w+;/;

    function ye(e, t, i, n, r) {
        for (var a, s, o, l, c, u, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
            if ((a = e[p]) || 0 === a)
                if ("object" === b(a)) x.merge(h, a.nodeType ? [a] : a);
                else if (ge.test(a)) {
            for (s = s || d.appendChild(t.createElement("div")), o = (ue.exec(a) || ["", ""])[1].toLowerCase(), l = he[o] || he._default, s.innerHTML = l[1] + x.htmlPrefilter(a) + l[2], u = l[0]; u--;) s = s.lastChild;
            x.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(a));
        for (d.textContent = "", p = 0; a = h[p++];)
            if (n && x.inArray(a, n) > -1) r && r.push(a);
            else if (c = x.contains(a.ownerDocument, a), s = pe(d.appendChild(a), "script"), c && fe(s), i)
            for (u = 0; a = s[u++];) de.test(a.type || "") && i.push(a);
        return d
    }
    me = n.createDocumentFragment().appendChild(n.createElement("div")), (ve = n.createElement("input")).setAttribute("type", "radio"), ve.setAttribute("checked", "checked"), ve.setAttribute("name", "t"), me.appendChild(ve), f.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var be = n.documentElement,
        we = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function Ce() {
        return !1
    }

    function _e() {
        try {
            return n.activeElement
        } catch (e) {}
    }

    function Se(e, t, i, n, r, a) {
        var s, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof i && (n = n || i, i = void 0), t) Se(e, o, i, n, t[o], a);
            return e
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = Ce;
        else if (!r) return e;
        return 1 === a && (s = r, (r = function(e) {
            return x().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = x.guid++)), e.each(function() {
            x.event.add(this, t, r, n, i)
        })
    }
    x.event = {
        global: {},
        add: function(e, t, i, n, r) {
            var a, s, o, l, c, u, d, h, p, f, m, v = K.get(e);
            if (v)
                for (i.handler && (i = (a = i).handler, r = a.selector), r && x.find.matchesSelector(be, r), i.guid || (i.guid = x.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(z) || [""]).length; c--;) p = m = (o = Ee.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), p && (d = x.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = x.event.special[p] || {}, u = x.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && x.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, a), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, f, s) || e.addEventListener && e.addEventListener(p, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), x.event.global[p] = !0)
        },
        remove: function(e, t, i, n, r) {
            var a, s, o, l, c, u, d, h, p, f, m, v = K.hasData(e) && K.get(e);
            if (v && (l = v.events)) {
                for (c = (t = (t || "").match(z) || [""]).length; c--;)
                    if (p = m = (o = Ee.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), p) {
                        for (d = x.event.special[p] || {}, h = l[p = (n ? d.delegateType : d.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = h.length; a--;) u = h[a], !r && m !== u.origType || i && i.guid !== u.guid || o && !o.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(a, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, v.handle) || x.removeEvent(e, p, v.handle), delete l[p])
                    } else
                        for (p in l) x.event.remove(e, p + t[c], i, n, !0);
                x.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, r, a, s, o = x.event.fix(e),
                l = new Array(arguments.length),
                c = (K.get(this, "events") || {})[o.type] || [],
                u = x.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, o)) {
                for (s = x.event.handlers.call(this, o, c), t = 0;
                    (r = s[t++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = r.elem, i = 0;
                        (a = r.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (n = ((x.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, o), o.result
            }
        },
        handlers: function(e, t) {
            var i, n, r, a, s, o = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (a = [], s = {}, i = 0; i < l; i++) void 0 === s[r = (n = t[i]).selector + " "] && (s[r] = n.needsContext ? x(r, this).index(c) > -1 : x.find(r, this, null, [c]).length), s[r] && a.push(n);
                        a.length && o.push({
                            elem: c,
                            handlers: a
                        })
                    }
            return c = this, l < t.length && o.push({
                elem: c,
                handlers: t.slice(l)
            }), o
        },
        addProp: function(e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== _e() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === _e() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return A(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, x.event.addProp), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || x.contains(this, n)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), x.fn.extend({
        on: function(e, t, i, n) {
            return Se(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return Se(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, x(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Ce), this.each(function() {
                x.event.remove(this, e, i, t)
            })
        }
    });
    var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Me(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Ne(e, t) {
        var i, n, r, a, s, o, l, c;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (a = K.access(e), s = K.set(t, a), c = a.events))
                for (r in delete s.handle, s.events = {}, c)
                    for (i = 0, n = c[r].length; i < n; i++) x.event.add(t, r, c[r][i]);
            Q.hasData(e) && (o = Q.access(e), l = x.extend({}, o), Q.set(t, l))
        }
    }

    function Le(e, t, i, n) {
        t = s.apply([], t);
        var r, a, o, l, c, u, d = 0,
            h = e.length,
            p = h - 1,
            v = t[0],
            g = m(v);
        if (g || h > 1 && "string" == typeof v && !f.checkClone && De.test(v)) return e.each(function(r) {
            var a = e.eq(r);
            g && (t[0] = v.call(this, r, a.html())), Le(a, t, i, n)
        });
        if (h && (a = (r = ye(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === r.childNodes.length && (r = a), a || n)) {
            for (l = (o = x.map(pe(r, "script"), Pe)).length; d < h; d++) c = r, d !== p && (c = x.clone(c, !0, !0), l && x.merge(o, pe(c, "script"))), i.call(e[d], c, d);
            if (l)
                for (u = o[o.length - 1].ownerDocument, x.map(o, Oe), d = 0; d < l; d++) c = o[d], de.test(c.type || "") && !K.access(c, "globalEval") && x.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(c.src) : y(c.textContent.replace(Ie, ""), u, c))
        }
        return e
    }

    function ze(e, t, i) {
        for (var n, r = t ? x.filter(t, e) : e, a = 0; null != (n = r[a]); a++) i || 1 !== n.nodeType || x.cleanData(pe(n)), n.parentNode && (i && x.contains(n.ownerDocument, n) && fe(pe(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e.replace(ke, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, r, a, s, o, l, c, u = e.cloneNode(!0),
                d = x.contains(e.ownerDocument, e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (s = pe(u), n = 0, r = (a = pe(e)).length; n < r; n++) o = a[n], l = s[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(o.type) ? l.checked = o.checked : "input" !== c && "textarea" !== c || (l.defaultValue = o.defaultValue);
            if (t)
                if (i)
                    for (a = a || pe(e), s = s || pe(u), n = 0, r = a.length; n < r; n++) Ne(a[n], s[n]);
                else Ne(e, u);
            return (s = pe(u, "script")).length > 0 && fe(s, !d && pe(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, i, n, r = x.event.special, a = 0; void 0 !== (i = e[a]); a++)
                if (X(i)) {
                    if (t = i[K.expando]) {
                        if (t.events)
                            for (n in t.events) r[n] ? x.event.remove(i, n) : x.removeEvent(i, n, t.handle);
                        i[K.expando] = void 0
                    }
                    i[Q.expando] && (i[Q.expando] = void 0)
                }
        }
    }), x.fn.extend({
        detach: function(e) {
            return ze(this, e, !0)
        },
        remove: function(e) {
            return ze(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? x.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Le(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Me(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(pe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !he[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (x.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Le(this, arguments, function(t) {
                var i = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(pe(this)), i && i.replaceChild(t, this))
            }, e)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            for (var i, n = [], r = x(e), a = r.length - 1, s = 0; s <= a; s++) i = s === a ? this : this.clone(!0), x(r[s])[t](i), o.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var je = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        He = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(t)
        },
        Re = new RegExp(ne.join("|"), "i");

    function $e(e, t, i) {
        var n, r, a, s, o = e.style;
        return (i = i || He(e)) && ("" !== (s = i.getPropertyValue(t) || i[t]) || x.contains(e.ownerDocument, e) || (s = x.style(e, t)), !f.pixelBoxStyles() && je.test(s) && Re.test(t) && (n = o.width, r = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = i.width, o.width = n, o.minWidth = r, o.maxWidth = a)), void 0 !== s ? s + "" : s
    }

    function qe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top, l = 12 === i(t.marginLeft), u.style.right = "60%", o = 36 === i(t.right), a = 36 === i(t.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", be.removeChild(c), u = null
            }
        }

        function i(e) {
            return Math.round(parseFloat(e))
        }
        var r, a, s, o, l, c = n.createElement("div"),
            u = n.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === u.style.backgroundClip, x.extend(f, {
            boxSizingReliable: function() {
                return t(), a
            },
            pixelBoxStyles: function() {
                return t(), o
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), s
            }
        }))
    }();
    var Be = /^(none|table(?!-c[ea]).+)/,
        Fe = /^--/,
        We = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ve = ["Webkit", "Moz", "ms"],
        Ge = n.createElement("div").style;

    function Xe(e) {
        var t = x.cssProps[e];
        return t || (t = x.cssProps[e] = function(e) {
            if (e in Ge) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), i = Ve.length; i--;)
                if ((e = Ve[i] + t) in Ge) return e
        }(e) || e), t
    }

    function Ue(e, t, i) {
        var n = ie.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function Ke(e, t, i, n, r, a) {
        var s = "width" === t ? 1 : 0,
            o = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === i && (l += x.css(e, i + ne[s], !0, r)), n ? ("content" === i && (l -= x.css(e, "padding" + ne[s], !0, r)), "margin" !== i && (l -= x.css(e, "border" + ne[s] + "Width", !0, r))) : (l += x.css(e, "padding" + ne[s], !0, r), "padding" !== i ? l += x.css(e, "border" + ne[s] + "Width", !0, r) : o += x.css(e, "border" + ne[s] + "Width", !0, r));
        return !n && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5))), l
    }

    function Qe(e, t, i) {
        var n = He(e),
            r = $e(e, t, n),
            a = "border-box" === x.css(e, "boxSizing", !1, n),
            s = a;
        if (je.test(r)) {
            if (!i) return r;
            r = "auto"
        }
        return s = s && (f.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === x.css(e, "display", !1, n)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Ke(e, t, i || (a ? "border" : "content"), s, n, r) + "px"
    }

    function Je(e, t, i, n, r) {
        return new Je.prototype.init(e, t, i, n, r)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = $e(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s, o = G(t),
                    l = Fe.test(t),
                    c = e.style;
                if (l || (t = Xe(o)), s = x.cssHooks[t] || x.cssHooks[o], void 0 === i) return s && "get" in s && void 0 !== (r = s.get(e, !1, n)) ? r : c[t];
                "string" === (a = typeof i) && (r = ie.exec(i)) && r[1] && (i = se(e, t, r), a = "number"), null != i && i == i && ("number" === a && (i += r && r[3] || (x.cssNumber[o] ? "" : "px")), f.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
            }
        },
        css: function(e, t, i, n) {
            var r, a, s, o = G(t);
            return Fe.test(t) || (t = Xe(o)), (s = x.cssHooks[t] || x.cssHooks[o]) && "get" in s && (r = s.get(e, !0, i)), void 0 === r && (r = $e(e, t, n)), "normal" === r && t in Ye && (r = Ye[t]), "" === i || i ? (a = parseFloat(r), !0 === i || isFinite(a) ? a || 0 : r) : r
        }
    }), x.each(["height", "width"], function(e, t) {
        x.cssHooks[t] = {
            get: function(e, i, n) {
                if (i) return !Be.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, t, n) : ae(e, We, function() {
                    return Qe(e, t, n)
                })
            },
            set: function(e, i, n) {
                var r, a = He(e),
                    s = "border-box" === x.css(e, "boxSizing", !1, a),
                    o = n && Ke(e, t, n, s, a);
                return s && f.scrollboxSize() === a.position && (o -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Ke(e, t, "border", !1, a) - .5)), o && (r = ie.exec(i)) && "px" !== (r[3] || "px") && (e.style[t] = i, i = x.css(e, t)), Ue(0, i, o)
            }
        }
    }), x.cssHooks.marginLeft = qe(f.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, r = {}, a = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[e + ne[n] + t] = a[n] || a[n - 2] || a[0];
                return r
            }
        }, "margin" !== e && (x.cssHooks[e + t].set = Ue)
    }), x.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, i) {
                var n, r, a = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (n = He(e), r = t.length; s < r; s++) a[t[s]] = x.css(e, t[s], !1, n);
                    return a
                }
                return void 0 !== i ? x.style(e, t, i) : x.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), x.Tween = Je, Je.prototype = {
        constructor: Je,
        init: function(e, t, i, n, r, a) {
            this.elem = e, this.prop = i, this.easing = r || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = a || (x.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = Je.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Je.propHooks._default.set(this), this
        }
    }, Je.prototype.init.prototype = Je.prototype, Je.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[x.cssProps[e.prop]] && !x.cssHooks[e.prop] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Je.propHooks.scrollTop = Je.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, x.fx = Je.prototype.init, x.fx.step = {};
    var Ze, et, tt, it, nt = /^(?:toggle|show|hide)$/,
        rt = /queueHooks$/;

    function at() {
        et && (!1 === n.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, x.fx.interval), x.fx.tick())
    }

    function st() {
        return e.setTimeout(function() {
            Ze = void 0
        }), Ze = Date.now()
    }

    function ot(e, t) {
        var i, n = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) r["margin" + (i = ne[n])] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e), r
    }

    function lt(e, t, i) {
        for (var n, r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), a = 0, s = r.length; a < s; a++)
            if (n = r[a].call(i, t, e)) return n
    }

    function ct(e, t, i) {
        var n, r, a = 0,
            s = ct.prefilters.length,
            o = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Ze || st(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), a = 0, s = c.tweens.length; a < s; a++) c.tweens[a].run(n);
                return o.notifyWith(e, [c, n, i]), n < 1 && s ? i : (s || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1)
            },
            c = o.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: Ze || st(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = x.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i < n; i++) c.tweens[i].run(1);
                    return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (! function(e, t) {
                var i, n, r, a, s;
                for (i in e)
                    if (r = t[n = G(i)], a = e[i], Array.isArray(a) && (r = a[1], a = e[i] = a[0]), i !== n && (e[n] = a, delete e[i]), (s = x.cssHooks[n]) && "expand" in s)
                        for (i in a = s.expand(a), delete e[n], a) i in e || (e[i] = a[i], t[i] = r);
                    else t[n] = r
            }(u, c.opts.specialEasing); a < s; a++)
            if (n = ct.prefilters[a].call(c, e, u, c.opts)) return m(n.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return x.map(u, lt, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    x.Animation = x.extend(ct, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return se(i.elem, e, ie.exec(t), i), i
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(z);
            for (var i, n = 0, r = e.length; n < r; n++) i = e[n], ct.tweeners[i] = ct.tweeners[i] || [], ct.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, i) {
            var n, r, a, s, o, l, c, u, d = "width" in t || "height" in t,
                h = this,
                p = {},
                f = e.style,
                m = e.nodeType && re(e),
                v = K.get(e, "fxshow");
            for (n in i.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || o()
                }), s.unqueued++, h.always(function() {
                    h.always(function() {
                        s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (r = t[n], nt.test(r)) {
                    if (delete t[n], a = a || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !v || void 0 === v[n]) continue;
                        m = !0
                    }
                    p[n] = v && v[n] || x.style(e, n)
                }
            if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(p))
                for (n in d && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = v && v.display) && (c = K.get(e, "display")), "none" === (u = x.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = x.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === x.css(e, "float") && (l || (h.done(function() {
                        f.display = c
                    }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function() {
                        f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                    })), l = !1, p) l || (v ? "hidden" in v && (m = v.hidden) : v = K.access(e, "fxshow", {
                    display: c
                }), a && (v.hidden = !m), m && le([e], !0), h.done(function() {
                    for (n in m || le([e]), K.remove(e, "fxshow"), p) x.style(e, n, p[n])
                })), l = lt(m ? v[n] : 0, n, h), n in v || (v[n] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
        }
    }), x.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? x.extend({}, e) : {
            complete: i || !i && t || m(e) && e,
            duration: e,
            easing: i && t || t && !m(t) && t
        };
        return x.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in x.fx.speeds ? n.duration = x.fx.speeds[n.duration] : n.duration = x.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            m(n.old) && n.old.call(this), n.queue && x.dequeue(this, n.queue)
        }, n
    }, x.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var r = x.isEmptyObject(e),
                a = x.speed(t, i, n),
                s = function() {
                    var t = ct(this, x.extend({}, e), a);
                    (r || K.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        },
        stop: function(e, t, i) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    a = x.timers,
                    s = K.get(this);
                if (r) s[r] && s[r].stop && n(s[r]);
                else
                    for (r in s) s[r] && s[r].stop && rt.test(r) && n(s[r]);
                for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(i), t = !1, a.splice(r, 1));
                !t && i || x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, i = K.get(this),
                    n = i[e + "queue"],
                    r = i[e + "queueHooks"],
                    a = x.timers,
                    s = n ? n.length : 0;
                for (i.finish = !0, x.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; t < s; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }), x.each(["toggle", "show", "hide"], function(e, t) {
        var i = x.fn[t];
        x.fn[t] = function(e, n, r) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ot(t, !0), e, n, r)
        }
    }), x.each({
        slideDown: ot("show"),
        slideUp: ot("hide"),
        slideToggle: ot("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), x.timers = [], x.fx.tick = function() {
        var e, t = 0,
            i = x.timers;
        for (Ze = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || x.fx.stop(), Ze = void 0
    }, x.fx.timer = function(e) {
        x.timers.push(e), x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        et || (et = !0, at())
    }, x.fx.stop = function() {
        et = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fn.delay = function(t, i) {
        return t = x.fx && x.fx.speeds[t] || t, i = i || "fx", this.queue(i, function(i, n) {
            var r = e.setTimeout(i, t);
            n.stop = function() {
                e.clearTimeout(r)
            }
        })
    }, tt = n.createElement("input"), it = n.createElement("select").appendChild(n.createElement("option")), tt.type = "checkbox", f.checkOn = "" !== tt.value, f.optSelected = it.selected, (tt = n.createElement("input")).value = "t", tt.type = "radio", f.radioValue = "t" === tt.value;
    var ut, dt = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return F(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        }
    }), x.extend({
        attr: function(e, t, i) {
            var n, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? x.prop(e, t, i) : (1 === a && x.isXMLDoc(e) || (r = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ut : void 0)), void 0 !== i ? null === i ? void x.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : r && "get" in r && null !== (n = r.get(e, t)) ? n : null == (n = x.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && A(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0,
                r = t && t.match(z);
            if (r && 1 === e.nodeType)
                for (; i = r[n++];) e.removeAttribute(i)
        }
    }), ut = {
        set: function(e, t, i) {
            return !1 === t ? x.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = dt[t] || x.find.attr;
        dt[t] = function(e, t, n) {
            var r, a, s = t.toLowerCase();
            return n || (a = dt[s], dt[s] = r, r = null != i(e, t, n) ? s : null, dt[s] = a), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        pt = /^(?:a|area)$/i;

    function ft(e) {
        return (e.match(z) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(z) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return F(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[x.propFix[e] || e]
            })
        }
    }), x.extend({
        prop: function(e, t, i) {
            var n, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && x.isXMLDoc(e) || (t = x.propFix[t] || t, r = x.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.fn.extend({
        addClass: function(e) {
            var t, i, n, r, a, s, o, l = 0;
            if (m(e)) return this.each(function(t) {
                x(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = vt(e)).length)
                for (; i = this[l++];)
                    if (r = mt(i), n = 1 === i.nodeType && " " + ft(r) + " ") {
                        for (s = 0; a = t[s++];) n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                        r !== (o = ft(n)) && i.setAttribute("class", o)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, r, a, s, o, l = 0;
            if (m(e)) return this.each(function(t) {
                x(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = vt(e)).length)
                for (; i = this[l++];)
                    if (r = mt(i), n = 1 === i.nodeType && " " + ft(r) + " ") {
                        for (s = 0; a = t[s++];)
                            for (; n.indexOf(" " + a + " ") > -1;) n = n.replace(" " + a + " ", " ");
                        r !== (o = ft(n)) && i.setAttribute("class", o)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e,
                n = "string" === i || Array.isArray(e);
            return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function(i) {
                x(this).toggleClass(e.call(this, i, mt(this), t), t)
            }) : this.each(function() {
                var t, r, a, s;
                if (n)
                    for (r = 0, a = x(this), s = vt(e); t = s[r++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                else void 0 !== e && "boolean" !== i || ((t = mt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + ft(mt(i)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var gt = /\r/g;
    x.fn.extend({
        val: function(e) {
            var t, i, n, r = this[0];
            return arguments.length ? (n = m(e), this.each(function(i) {
                var r;
                1 === this.nodeType && (null == (r = n ? e.call(this, i, x(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = x.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : "string" == typeof(i = r.value) ? i.replace(gt, "") : null == i ? "" : i : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : ft(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, r = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        o = s ? null : [],
                        l = s ? a + 1 : r.length;
                    for (n = a < 0 ? l : s ? a : 0; n < l; n++)
                        if (((i = r[n]).selected || n === a) && !i.disabled && (!i.parentNode.disabled || !A(i.parentNode, "optgroup"))) {
                            if (t = x(i).val(), s) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var i, n, r = e.options, a = x.makeArray(t), s = r.length; s--;)((n = r[s]).selected = x.inArray(x.valHooks.option.get(n), a) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1), a
                }
            }
        }
    }), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1
            }
        }, f.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), f.focusin = "onfocusin" in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function(e) {
            e.stopPropagation()
        };
    x.extend(x.event, {
        trigger: function(t, i, r, a) {
            var s, o, l, c, u, h, p, f, g = [r || n],
                y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = f = l = r = r || n, 3 !== r.nodeType && 8 !== r.nodeType && !yt.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = a ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), i = null == i ? [t] : x.makeArray(i, [t]), p = x.event.special[y] || {}, a || !p.trigger || !1 !== p.trigger.apply(r, i))) {
                if (!a && !p.noBubble && !v(r)) {
                    for (c = p.delegateType || y, yt.test(c + y) || (o = o.parentNode); o; o = o.parentNode) g.push(o), l = o;
                    l === (r.ownerDocument || n) && g.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0;
                    (o = g[s++]) && !t.isPropagationStopped();) f = o, t.type = s > 1 ? c : p.bindType || y, (h = (K.get(o, "events") || {})[t.type] && K.get(o, "handle")) && h.apply(o, i), (h = u && o[u]) && h.apply && X(o) && (t.result = h.apply(o, i), !1 === t.result && t.preventDefault());
                return t.type = y, a || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), i) || !X(r) || u && m(r[y]) && !v(r) && ((l = r[u]) && (r[u] = null), x.event.triggered = y, t.isPropagationStopped() && f.addEventListener(y, bt), r[y](), t.isPropagationStopped() && f.removeEventListener(y, bt), x.event.triggered = void 0, l && (r[u] = l)), t.result
            }
        },
        simulate: function(e, t, i) {
            var n = x.extend(new x.Event, i, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(n, null, t)
        }
    }), x.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i) return x.event.trigger(e, t, i, !0)
        }
    }), f.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e))
        };
        x.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    r = K.access(n, t);
                r || n.addEventListener(e, i, !0), K.access(n, t, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    r = K.access(n, t) - 1;
                r ? K.access(n, t, r) : (n.removeEventListener(e, i, !0), K.remove(n, t))
            }
        }
    });
    var wt = e.location,
        xt = Date.now(),
        Et = /\?/;
    x.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + t), i
    };
    var Tt = /\[\]$/,
        Ct = /\r?\n/g,
        _t = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function kt(e, t, i, n) {
        var r;
        if (Array.isArray(t)) x.each(t, function(t, r) {
            i || Tt.test(e) ? n(e, r) : kt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, i, n)
        });
        else if (i || "object" !== b(t)) n(e, t);
        else
            for (r in t) kt(e + "[" + r + "]", t[r], i, n)
    }
    x.param = function(e, t) {
        var i, n = [],
            r = function(e, t) {
                var i = m(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (i in e) kt(i, e[i], t, r);
        return n.join("&")
    }, x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && St.test(this.nodeName) && !_t.test(e) && (this.checked || !ce.test(e))
            }).map(function(e, t) {
                var i = x(this).val();
                return null == i ? null : Array.isArray(i) ? x.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Ct, "\r\n")
                }
            }).get()
        }
    });
    var At = /%20/g,
        Dt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:GET|HEAD)$/,
        Ot = /^\/\//,
        Nt = {},
        Lt = {},
        zt = "*/".concat("*"),
        jt = n.createElement("a");

    function Ht(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, r = 0,
                a = t.toLowerCase().match(z) || [];
            if (m(i))
                for (; n = a[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function Rt(e, t, i, n) {
        var r = {},
            a = e === Lt;

        function s(o) {
            var l;
            return r[o] = !0, x.each(e[o] || [], function(e, o) {
                var c = o(t, i, n);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function $t(e, t) {
        var i, n, r = x.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && x.extend(!0, e, n), e
    }
    jt.href = wt.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, x.ajaxSettings), t) : $t(x.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(Nt),
        ajaxTransport: Ht(Lt),
        ajax: function(t, i) {
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var r, a, s, o, l, c, u, d, h, p, f = x.ajaxSetup({}, i),
                m = f.context || f,
                v = f.context && (m.nodeType || m.jquery) ? x(m) : x.event,
                g = x.Deferred(),
                y = x.Callbacks("once memory"),
                b = f.statusCode || {},
                w = {},
                E = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!o)
                                for (o = {}; t = Mt.exec(s);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) C.always(e[C.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return r && r.abort(t), _(0, t), this
                    }
                };
            if (g.promise(C), f.url = ((t || f.url || wt.href) + "").replace(Ot, wt.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(z) || [""], null == f.crossDomain) {
                c = n.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = jt.protocol + "//" + jt.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), Rt(Nt, f, i, C), u) return C;
            for (h in (d = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Pt.test(f.type), a = f.url.replace(Dt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(At, "+")) : (p = f.url.slice(a.length), f.data && (f.processData || "string" == typeof f.data) && (a += (Et.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (a = a.replace(It, "$1"), p = (Et.test(a) ? "&" : "?") + "_=" + xt++ + p), f.url = a + p), f.ifModified && (x.lastModified[a] && C.setRequestHeader("If-Modified-Since", x.lastModified[a]), x.etag[a] && C.setRequestHeader("If-None-Match", x.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, C, f) || u)) return C.abort();
            if (T = "abort", y.add(f.complete), C.done(f.success), C.fail(f.error), r = Rt(Lt, f, i, C)) {
                if (C.readyState = 1, d && v.trigger("ajaxSend", [C, f]), u) return C;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    u = !1, r.send(w, _)
                } catch (e) {
                    if (u) throw e;
                    _(-1, e)
                }
            } else _(-1, "No Transport");

            function _(t, i, n, o) {
                var c, h, p, w, E, T = i;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, s = o || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, n && (w = function(e, t, i) {
                    for (var n, r, a, s, o = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in o)
                            if (o[r] && o[r].test(n)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in i) a = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                a = r;
                                break
                            }
                            s || (s = r)
                        }
                        a = a || s
                    }
                    if (a) return a !== l[0] && l.unshift(a), i[a]
                }(f, C, n)), w = function(e, t, i, n) {
                    var r, a, s, o, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (a = u.shift(); a;)
                        if (e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                            if ("*" === a) a = l;
                            else if ("*" !== l && l !== a) {
                        if (!(s = c[l + " " + a] || c["* " + a]))
                            for (r in c)
                                if ((o = r.split(" "))[1] === a && (s = c[l + " " + o[0]] || c["* " + o[0]])) {
                                    !0 === s ? s = c[r] : !0 !== c[r] && (a = o[0], u.unshift(o[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + a
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, w, C, c), c ? (f.ifModified && ((E = C.getResponseHeader("Last-Modified")) && (x.lastModified[a] = E), (E = C.getResponseHeader("etag")) && (x.etag[a] = E)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, h = w.data, c = !(p = w.error))) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (i || T) + "", c ? g.resolveWith(m, [h, T, C]) : g.rejectWith(m, [C, T, p]), C.statusCode(b), b = void 0, d && v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? h : p]), y.fireWith(m, [C, T]), d && (v.trigger("ajaxComplete", [C, f]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, i) {
            return x.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], function(e, t) {
        x[t] = function(e, i, n, r) {
            return m(i) && (r = r || n, n = i, i = void 0), x.ajax(x.extend({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: n
            }, x.isPlainObject(e) && e))
        }
    }), x._evalUrl = function(e) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, x.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return m(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = m(e);
            return this.each(function(i) {
                x(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                x(this).replaceWith(this.childNodes)
            }), this
        }
    }), x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var qt = {
            0: 200,
            1223: 204
        },
        Bt = x.ajaxSettings.xhr();
    f.cors = !!Bt && "withCredentials" in Bt, f.ajax = Bt = !!Bt, x.ajaxTransport(function(t) {
        var i, n;
        if (f.cors || Bt && !t.crossDomain) return {
            send: function(r, a) {
                var s, o = t.xhr();
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) o[s] = t.xhrFields[s];
                for (s in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) o.setRequestHeader(s, r[s]);
                i = function(e) {
                    return function() {
                        i && (i = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(qt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                            binary: o.response
                        } : {
                            text: o.responseText
                        }, o.getAllResponseHeaders()))
                    }
                }, o.onload = i(), n = o.onerror = o.ontimeout = i("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function() {
                    4 === o.readyState && e.setTimeout(function() {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (i) throw e
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), x.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), x.ajaxTransport("script", function(e) {
        var t, i;
        if (e.crossDomain) return {
            send: function(r, a) {
                t = x("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", i = function(e) {
                    t.remove(), i = null, e && a("error" === e.type ? 404 : 200, e.type)
                }), n.head.appendChild(t[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Ft, Wt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Wt.pop() || x.expando + "_" + xt++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(t, i, n) {
        var r, a, s, o = !1 !== t.jsonp && (Yt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Yt, "$1" + r) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || x.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", a = e[r], e[r] = function() {
            s = arguments
        }, n.always(function() {
            void 0 === a ? x(e).removeProp(r) : e[r] = a, t[r] && (t.jsonpCallback = i.jsonpCallback, Wt.push(r)), s && m(a) && a(s[0]), s = a = void 0
        }), "script"
    }), f.createHTMLDocument = ((Ft = n.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), x.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (f.createHTMLDocument ? ((r = (t = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, t.head.appendChild(r)) : t = n), s = !i && [], (a = D.exec(e)) ? [t.createElement(a[1])] : (a = ye([e], t, s), s && s.length && x(s).remove(), x.merge([], a.childNodes)));
        var r, a, s
    }, x.fn.load = function(e, t, i) {
        var n, r, a, s = this,
            o = e.indexOf(" ");
        return o > -1 && (n = ft(e.slice(o)), e = e.slice(0, o)), m(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, s.html(n ? x("<div>").append(x.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            s.each(function() {
                i.apply(this, a || [e.responseText, t, e])
            })
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.expr.pseudos.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }, x.offset = {
        setOffset: function(e, t, i) {
            var n, r, a, s, o, l, c = x.css(e, "position"),
                u = x(e),
                d = {};
            "static" === c && (e.style.position = "relative"), o = u.offset(), a = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1 ? (s = (n = u.position()).top, r = n.left) : (s = parseFloat(a) || 0, r = parseFloat(l) || 0), m(t) && (t = t.call(e, i, x.extend({}, o))), null != t.top && (d.top = t.top - o.top + s), null != t.left && (d.left = t.left - o.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, x.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                x.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: t.top + i.pageYOffset,
                left: t.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === x.css(n, "position")) t = n.getBoundingClientRect();
                else {
                    for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((r = x(e).offset()).top += x.css(e, "borderTopWidth", !0), r.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - x.css(n, "marginTop", !0),
                    left: t.left - r.left - x.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || be
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = "pageYOffset" === t;
        x.fn[e] = function(n) {
            return F(this, function(e, n, r) {
                var a;
                if (v(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === r) return a ? a[t] : e[n];
                a ? a.scrollTo(i ? a.pageXOffset : r, i ? r : a.pageYOffset) : e[n] = r
            }, e, n, arguments.length)
        }
    }), x.each(["top", "left"], function(e, t) {
        x.cssHooks[t] = qe(f.pixelPosition, function(e, i) {
            if (i) return i = $e(e, t), je.test(i) ? x(e).position()[t] + "px" : i
        })
    }), x.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            x.fn[n] = function(r, a) {
                var s = arguments.length && (i || "boolean" != typeof r),
                    o = i || (!0 === r || !0 === a ? "margin" : "border");
                return F(this, function(t, i, r) {
                    var a;
                    return v(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? x.css(t, i, o) : x.style(t, i, r, o)
                }, t, s ? r : void 0, s)
            }
        })
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), x.proxy = function(e, t) {
        var i, n, r;
        if ("string" == typeof t && (i = e[t], t = e, e = i), m(e)) return n = a.call(arguments, 2), (r = function() {
            return e.apply(t || this, n.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || x.guid++, r
    }, x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = A, x.isFunction = m, x.isWindow = v, x.camelCase = G, x.type = b, x.now = Date.now, x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    });
    var Vt = e.jQuery,
        Gt = e.$;
    return x.noConflict = function(t) {
        return e.$ === x && (e.$ = Gt), t && e.jQuery === x && (e.jQuery = Vt), x
    }, t || (e.jQuery = e.$ = x), x
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";
    for (var e = "undefined" != typeof window && "undefined" != typeof document, t = ["Edge", "Trident", "Firefox"], i = 0, n = 0; n < t.length; n += 1)
        if (e && navigator.userAgent.indexOf(t[n]) >= 0) {
            i = 1;
            break
        }
    var r = e && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then(function() {
                t = !1, e()
            }))
        }
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e()
            }, i))
        }
    };

    function a(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function s(e, t) {
        if (1 !== e.nodeType) return [];
        var i = getComputedStyle(e, null);
        return t ? i[t] : i
    }

    function o(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function l(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = s(e),
            i = t.overflow,
            n = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll)/.test(i + r + n) ? e : l(o(e))
    }

    function c(e) {
        var t = e && e.offsetParent,
            i = t && t.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === s(t, "position") ? c(t) : t : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function u(e) {
        return null !== e.parentNode ? u(e.parentNode) : e
    }

    function d(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = i ? e : t,
            r = i ? t : e,
            a = document.createRange();
        a.setStart(n, 0), a.setEnd(r, 0);
        var s, o, l = a.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(r)) return "BODY" === (o = (s = l).nodeName) || "HTML" !== o && c(s.firstElementChild) !== s ? c(l) : l;
        var h = u(e);
        return h.host ? d(h.host, t) : d(e, u(t).host)
    }

    function h(e) {
        var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var n = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || n)[t]
        }
        return e[t]
    }

    function p(e, t) {
        var i = "x" === t ? "Left" : "Top",
            n = "Left" === i ? "Right" : "Bottom";
        return parseFloat(e["border" + i + "Width"], 10) + parseFloat(e["border" + n + "Width"], 10)
    }
    var f = void 0,
        m = function() {
            return void 0 === f && (f = -1 !== navigator.appVersion.indexOf("MSIE 10")), f
        };

    function v(e, t, i, n) {
        return Math.max(t["offset" + e], t["scroll" + e], i["client" + e], i["offset" + e], i["scroll" + e], m() ? i["offset" + e] + n["margin" + ("Height" === e ? "Top" : "Left")] + n["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function g() {
        var e = document.body,
            t = document.documentElement,
            i = m() && getComputedStyle(t);
        return {
            height: v("Height", e, t, i),
            width: v("Width", e, t, i)
        }
    }
    var y = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        b = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        w = function(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        },
        x = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        };

    function E(e) {
        return x({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function T(e) {
        var t = {};
        if (m()) try {
            t = e.getBoundingClientRect();
            var i = h(e, "top"),
                n = h(e, "left");
            t.top += i, t.left += n, t.bottom += i, t.right += n
        } catch (e) {} else t = e.getBoundingClientRect();
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            a = "HTML" === e.nodeName ? g() : {},
            o = a.width || e.clientWidth || r.right - r.left,
            l = a.height || e.clientHeight || r.bottom - r.top,
            c = e.offsetWidth - o,
            u = e.offsetHeight - l;
        if (c || u) {
            var d = s(e);
            c -= p(d, "x"), u -= p(d, "y"), r.width -= c, r.height -= u
        }
        return E(r)
    }

    function C(e, t) {
        var i = m(),
            n = "HTML" === t.nodeName,
            r = T(e),
            a = T(t),
            o = l(e),
            c = s(t),
            u = parseFloat(c.borderTopWidth, 10),
            d = parseFloat(c.borderLeftWidth, 10),
            p = E({
                top: r.top - a.top - u,
                left: r.left - a.left - d,
                width: r.width,
                height: r.height
            });
        if (p.marginTop = 0, p.marginLeft = 0, !i && n) {
            var f = parseFloat(c.marginTop, 10),
                v = parseFloat(c.marginLeft, 10);
            p.top -= u - f, p.bottom -= u - f, p.left -= d - v, p.right -= d - v, p.marginTop = f, p.marginLeft = v
        }
        return (i ? t.contains(o) : t === o && "BODY" !== o.nodeName) && (p = function(e, t) {
            var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = h(t, "top"),
                r = h(t, "left"),
                a = i ? -1 : 1;
            return e.top += n * a, e.bottom += n * a, e.left += r * a, e.right += r * a, e
        }(p, t)), p
    }

    function _(e, t, i, n) {
        var r, a, c, u, p, f, m, v = {
                top: 0,
                left: 0
            },
            y = d(e, t);
        if ("viewport" === n) a = (r = y).ownerDocument.documentElement, c = C(r, a), u = Math.max(a.clientWidth, window.innerWidth || 0), p = Math.max(a.clientHeight, window.innerHeight || 0), f = h(a), m = h(a, "left"), v = E({
            top: f - c.top + c.marginTop,
            left: m - c.left + c.marginLeft,
            width: u,
            height: p
        });
        else {
            var b = void 0;
            "scrollParent" === n ? "BODY" === (b = l(o(t))).nodeName && (b = e.ownerDocument.documentElement) : b = "window" === n ? e.ownerDocument.documentElement : n;
            var w = C(b, y);
            if ("HTML" !== b.nodeName || function e(t) {
                    var i = t.nodeName;
                    return "BODY" !== i && "HTML" !== i && ("fixed" === s(t, "position") || e(o(t)))
                }(y)) v = w;
            else {
                var x = g(),
                    T = x.height,
                    _ = x.width;
                v.top += w.top - w.marginTop, v.bottom = T + w.top, v.left += w.left - w.marginLeft, v.right = _ + w.left
            }
        }
        return v.left += i, v.top += i, v.right -= i, v.bottom -= i, v
    }

    function S(e, t, i, n, r) {
        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = _(i, n, a, r),
            o = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(o).map(function(e) {
                return x({
                    key: e
                }, o[e], {
                    area: (t = o[e], t.width * t.height)
                });
                var t
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            c = l.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            u = c.length > 0 ? c[0].key : l[0].key,
            d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }

    function k(e, t, i) {
        return C(i, d(t, i))
    }

    function A(e) {
        var t = getComputedStyle(e),
            i = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            n = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + n,
            height: e.offsetHeight + i
        }
    }

    function D(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function I(e, t, i) {
        i = i.split("-")[0];
        var n = A(e),
            r = {
                width: n.width,
                height: n.height
            },
            a = -1 !== ["right", "left"].indexOf(i),
            s = a ? "top" : "left",
            o = a ? "left" : "top",
            l = a ? "height" : "width",
            c = a ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - n[l] / 2, r[o] = i === o ? t[o] - n[c] : t[D(o)], r
    }

    function M(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function P(e, t, i) {
        return (void 0 === i ? e : e.slice(0, function(e, t, i) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === i
            });
            var n = M(e, function(e) {
                return e[t] === i
            });
            return e.indexOf(n)
        }(e, "name", i))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = e.function || e.fn;
            e.enabled && a(i) && (t.offsets.popper = E(t.offsets.popper), t.offsets.reference = E(t.offsets.reference), t = i(t, e))
        }), t
    }

    function O(e, t) {
        return e.some(function(e) {
            var i = e.name;
            return e.enabled && i === t
        })
    }

    function N(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var r = t[n],
                a = r ? "" + r + i : e;
            if (void 0 !== document.body.style[a]) return a
        }
        return null
    }

    function L(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function z(e, t, i, n) {
        i.updateBound = n, L(e).addEventListener("resize", i.updateBound, {
            passive: !0
        });
        var r = l(e);
        return function e(t, i, n, r) {
            var a = "BODY" === t.nodeName,
                s = a ? t.ownerDocument.defaultView : t;
            s.addEventListener(i, n, {
                passive: !0
            }), a || e(l(s.parentNode), i, n, r), r.push(s)
        }(r, "scroll", i.updateBound, i.scrollParents), i.scrollElement = r, i.eventsEnabled = !0, i
    }

    function j() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, L(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function H(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function R(e, t) {
        Object.keys(t).forEach(function(i) {
            var n = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && H(t[i]) && (n = "px"), e.style[i] = t[i] + n
        })
    }

    function $(e, t, i) {
        var n = M(e, function(e) {
                return e.name === t
            }),
            r = !!n && e.some(function(e) {
                return e.name === i && e.enabled && e.order < n.order
            });
        if (!r) {
            var a = "`" + t + "`",
                s = "`" + i + "`";
            console.warn(s + " modifier is required by " + a + " modifier in order to work, be sure to include it before " + a + "!")
        }
        return r
    }
    var q = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        B = q.slice(3);

    function F(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = B.indexOf(e),
            n = B.slice(i + 1).concat(B.slice(0, i));
        return t ? n.reverse() : n
    }
    var W = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    };

    function Y(e, t, i, n) {
        var r = [0, 0],
            a = -1 !== ["right", "left"].indexOf(n),
            s = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            o = s.indexOf(M(s, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        s[o] && -1 === s[o].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== o ? [s.slice(0, o).concat([s[o].split(l)[0]]), [s[o].split(l)[1]].concat(s.slice(o + 1))] : [s];
        return (c = c.map(function(e, n) {
            var r = (1 === n ? !a : a) ? "height" : "width",
                s = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, i, n) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        a = +r[1],
                        s = r[2];
                    if (!a) return e;
                    if (0 === s.indexOf("%")) {
                        var o = void 0;
                        switch (s) {
                            case "%p":
                                o = i;
                                break;
                            case "%":
                            case "%r":
                            default:
                                o = n
                        }
                        return E(o)[t] / 100 * a
                    }
                    if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a;
                    return a
                }(e, r, t, i)
            })
        })).forEach(function(e, t) {
            e.forEach(function(i, n) {
                H(i) && (r[t] += i * ("-" === e[n - 1] ? -1 : 1))
            })
        }), r
    }
    var V = {
            placement: "bottom",
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            i = t.split("-")[0],
                            n = t.split("-")[1];
                        if (n) {
                            var r = e.offsets,
                                a = r.reference,
                                s = r.popper,
                                o = -1 !== ["bottom", "top"].indexOf(i),
                                l = o ? "left" : "top",
                                c = o ? "width" : "height",
                                u = {
                                    start: w({}, l, a[l]),
                                    end: w({}, l, a[l] + a[c] - s[c])
                                };
                            e.offsets.popper = x({}, s, u[n])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var i = t.offset,
                            n = e.placement,
                            r = e.offsets,
                            a = r.popper,
                            s = r.reference,
                            o = n.split("-")[0],
                            l = void 0;
                        return l = H(+i) ? [+i, 0] : Y(i, a, s, o), "left" === o ? (a.top += l[0], a.left -= l[1]) : "right" === o ? (a.top += l[0], a.left += l[1]) : "top" === o ? (a.left += l[0], a.top -= l[1]) : "bottom" === o && (a.left += l[0], a.top += l[1]), e.popper = a, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, t) {
                        var i = t.boundariesElement || c(e.instance.popper);
                        e.instance.reference === i && (i = c(i));
                        var n = _(e.instance.popper, e.instance.reference, t.padding, i);
                        t.boundaries = n;
                        var r = t.priority,
                            a = e.offsets.popper,
                            s = {
                                primary: function(e) {
                                    var i = a[e];
                                    return a[e] < n[e] && !t.escapeWithReference && (i = Math.max(a[e], n[e])), w({}, e, i)
                                },
                                secondary: function(e) {
                                    var i = "right" === e ? "left" : "top",
                                        r = a[i];
                                    return a[e] > n[e] && !t.escapeWithReference && (r = Math.min(a[i], n[e] - ("right" === e ? a.width : a.height))), w({}, i, r)
                                }
                            };
                        return r.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            a = x({}, a, s[t](e))
                        }), e.offsets.popper = a, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            i = t.popper,
                            n = t.reference,
                            r = e.placement.split("-")[0],
                            a = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            o = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return i[o] < a(n[l]) && (e.offsets.popper[l] = a(n[l]) - i[c]), i[l] > a(n[o]) && (e.offsets.popper[l] = a(n[o])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var i;
                        if (!$(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var n = t.element;
                        if ("string" == typeof n) {
                            if (!(n = e.instance.popper.querySelector(n))) return e
                        } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            a = e.offsets,
                            o = a.popper,
                            l = a.reference,
                            c = -1 !== ["left", "right"].indexOf(r),
                            u = c ? "height" : "width",
                            d = c ? "Top" : "Left",
                            h = d.toLowerCase(),
                            p = c ? "left" : "top",
                            f = c ? "bottom" : "right",
                            m = A(n)[u];
                        l[f] - m < o[h] && (e.offsets.popper[h] -= o[h] - (l[f] - m)), l[h] + m > o[f] && (e.offsets.popper[h] += l[h] + m - o[f]), e.offsets.popper = E(e.offsets.popper);
                        var v = l[h] + l[u] / 2 - m / 2,
                            g = s(e.instance.popper),
                            y = parseFloat(g["margin" + d], 10),
                            b = parseFloat(g["border" + d + "Width"], 10),
                            x = v - e.offsets.popper[h] - y - b;
                        return x = Math.max(Math.min(o[u] - m, x), 0), e.arrowElement = n, e.offsets.arrow = (w(i = {}, h, Math.round(x)), w(i, p, ""), i), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(e, t) {
                        if (O(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var i = _(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                            n = e.placement.split("-")[0],
                            r = D(n),
                            a = e.placement.split("-")[1] || "",
                            s = [];
                        switch (t.behavior) {
                            case W.FLIP:
                                s = [n, r];
                                break;
                            case W.CLOCKWISE:
                                s = F(n);
                                break;
                            case W.COUNTERCLOCKWISE:
                                s = F(n, !0);
                                break;
                            default:
                                s = t.behavior
                        }
                        return s.forEach(function(o, l) {
                            if (n !== o || s.length === l + 1) return e;
                            n = e.placement.split("-")[0], r = D(n);
                            var c, u = e.offsets.popper,
                                d = e.offsets.reference,
                                h = Math.floor,
                                p = "left" === n && h(u.right) > h(d.left) || "right" === n && h(u.left) < h(d.right) || "top" === n && h(u.bottom) > h(d.top) || "bottom" === n && h(u.top) < h(d.bottom),
                                f = h(u.left) < h(i.left),
                                m = h(u.right) > h(i.right),
                                v = h(u.top) < h(i.top),
                                g = h(u.bottom) > h(i.bottom),
                                y = "left" === n && f || "right" === n && m || "top" === n && v || "bottom" === n && g,
                                b = -1 !== ["top", "bottom"].indexOf(n),
                                w = !!t.flipVariations && (b && "start" === a && f || b && "end" === a && m || !b && "start" === a && v || !b && "end" === a && g);
                            (p || y || w) && (e.flipped = !0, (p || y) && (n = s[l + 1]), w && (a = "end" === (c = a) ? "start" : "start" === c ? "end" : c), e.placement = n + (a ? "-" + a : ""), e.offsets.popper = x({}, e.offsets.popper, I(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, "flip"))
                        }), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            i = t.split("-")[0],
                            n = e.offsets,
                            r = n.popper,
                            a = n.reference,
                            s = -1 !== ["left", "right"].indexOf(i),
                            o = -1 === ["top", "left"].indexOf(i);
                        return r[s ? "left" : "top"] = a[i] - (o ? r[s ? "width" : "height"] : 0), e.placement = D(t), e.offsets.popper = E(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!$(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            i = M(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var i = t.x,
                            n = t.y,
                            r = e.offsets.popper,
                            a = M(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== a ? a : t.gpuAcceleration,
                            o = T(c(e.instance.popper)),
                            l = {
                                position: r.position
                            },
                            u = {
                                left: Math.floor(r.left),
                                top: Math.floor(r.top),
                                bottom: Math.floor(r.bottom),
                                right: Math.floor(r.right)
                            },
                            d = "bottom" === i ? "top" : "bottom",
                            h = "right" === n ? "left" : "right",
                            p = N("transform"),
                            f = void 0,
                            m = void 0;
                        if (m = "bottom" === d ? -o.height + u.bottom : u.top, f = "right" === h ? -o.width + u.right : u.left, s && p) l[p] = "translate3d(" + f + "px, " + m + "px, 0)", l[d] = 0, l[h] = 0, l.willChange = "transform";
                        else {
                            var v = "bottom" === d ? -1 : 1,
                                g = "right" === h ? -1 : 1;
                            l[d] = m * v, l[h] = f * g, l.willChange = d + ", " + h
                        }
                        var y = {
                            "x-placement": e.placement
                        };
                        return e.attributes = x({}, y, e.attributes), e.styles = x({}, l, e.styles), e.arrowStyles = x({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        var t, i;
                        return R(e.instance.popper, e.styles), t = e.instance.popper, i = e.attributes, Object.keys(i).forEach(function(e) {
                            !1 !== i[e] ? t.setAttribute(e, i[e]) : t.removeAttribute(e)
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && R(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function(e, t, i, n, r) {
                        var a = k(0, t, e),
                            s = S(i.placement, a, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), R(t, {
                            position: "absolute"
                        }), i
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        G = function() {
            function e(t, i) {
                var n = this,
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                y(this, e), this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }, this.update = r(this.update.bind(this)), this.options = x({}, e.Defaults, s), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(x({}, e.Defaults.modifiers, s.modifiers)).forEach(function(t) {
                    n.options.modifiers[t] = x({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return x({
                        name: e
                    }, n.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && a(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                }), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }
            return b(e, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = k(this.state, this.popper, this.reference), e.placement = S(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = I(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, O(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[N("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = z(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return j.call(this)
                }
            }]), e
        }();
    return G.Utils = ("undefined" != typeof window ? window : global).PopperUtils, G.placements = q, G.Defaults = V, G
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, i) {
    "use strict";

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function r(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function a() {
        return (a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }).apply(this, arguments)
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, i = i && i.hasOwnProperty("default") ? i.default : i;
    var s, o, l, c, u, d, h, p, f, m, v, g, y, b, w, x, E, T, C, _, S, k, A, D, I, M, P, O, N, L, z, j, H, R, $, q, B, F, W, Y, V, G, X, U, K, Q, J, Z, ee, te, ie, ne, re, ae, se, oe, le, ce, ue, de, he, pe, fe, me, ve, ge, ye, be, we, xe, Ee, Te, Ce, _e, Se, ke, Ae, De, Ie, Me, Pe, Oe, Ne, Le, ze, je, He, Re, $e, qe, Be, Fe, We, Ye, Ve, Ge, Xe, Ue, Ke, Qe, Je, Ze, et, tt, it, nt, rt, at, st, ot, lt, ct, ut, dt, ht, pt, ft, mt, vt, gt, yt, bt, wt, xt, Et, Tt, Ct, _t, St, kt, At, Dt, It, Mt, Pt, Ot, Nt, Lt, zt, jt, Ht, Rt, $t, qt, Bt, Ft, Wt, Yt, Vt, Gt, Xt, Ut, Kt, Qt, Jt, Zt, ei, ti, ii, ni, ri, ai, si, oi, li, ci, ui, di, hi, pi, fi, mi, vi, gi, yi, bi, wi, xi, Ei = function(e) {
            var t = !1;

            function i(t) {
                var i = this,
                    r = !1;
                return e(this).one(n.TRANSITION_END, function() {
                    r = !0
                }), setTimeout(function() {
                    r || n.triggerTransitionEnd(i)
                }, t), this
            }
            var n = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(e) {
                    do {
                        e += ~~(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                },
                getSelectorFromElement: function(t) {
                    var i, n = t.getAttribute("data-target");
                    n && "#" !== n || (n = t.getAttribute("href") || ""), "#" === n.charAt(0) && (i = n, n = i = "function" == typeof e.escapeSelector ? e.escapeSelector(i).substr(1) : i.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                    try {
                        return e(document).find(n).length > 0 ? n : null
                    } catch (e) {
                        return null
                    }
                },
                reflow: function(e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function(i) {
                    e(i).trigger(t.end)
                },
                supportsTransitionEnd: function() {
                    return Boolean(t)
                },
                isElement: function(e) {
                    return (e[0] || e).nodeType
                },
                typeCheckConfig: function(e, t, i) {
                    for (var r in i)
                        if (Object.prototype.hasOwnProperty.call(i, r)) {
                            var a = i[r],
                                s = t[r],
                                o = s && n.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                            if (!new RegExp(a).test(o)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + o + '" but expected type "' + a + '".')
                        }
                    var l
                }
            };
            return t = ("undefined" == typeof window || !window.QUnit) && {
                end: "transitionend"
            }, e.fn.emulateTransitionEnd = i, n.supportsTransitionEnd() && (e.event.special[n.TRANSITION_END] = {
                bindType: t.end,
                delegateType: t.end,
                handle: function(t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }), n
        }(t),
        Ti = (o = "alert", c = "." + (l = "bs.alert"), u = (s = t).fn[o], d = {
            CLOSE: "close" + c,
            CLOSED: "closed" + c,
            CLICK_DATA_API: "click" + c + ".data-api"
        }, h = "alert", p = "fade", f = "show", m = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.close = function(e) {
                e = e || this._element;
                var t = this._getRootElement(e);
                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function() {
                s.removeData(this._element, l), this._element = null
            }, t._getRootElement = function(e) {
                var t = Ei.getSelectorFromElement(e),
                    i = !1;
                return t && (i = s(t)[0]), i || (i = s(e).closest("." + h)[0]), i
            }, t._triggerCloseEvent = function(e) {
                var t = s.Event(d.CLOSE);
                return s(e).trigger(t), t
            }, t._removeElement = function(e) {
                var t = this;
                s(e).removeClass(f), Ei.supportsTransitionEnd() && s(e).hasClass(p) ? s(e).one(Ei.TRANSITION_END, function(i) {
                    return t._destroyElement(e, i)
                }).emulateTransitionEnd(150) : this._destroyElement(e)
            }, t._destroyElement = function(e) {
                s(e).detach().trigger(d.CLOSED).remove()
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = s(this),
                        n = i.data(l);
                    n || (n = new e(this), i.data(l, n)), "close" === t && n[t](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }]), e
        }(), s(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m)), s.fn[o] = m._jQueryInterface, s.fn[o].Constructor = m, s.fn[o].noConflict = function() {
            return s.fn[o] = u, m._jQueryInterface
        }, m),
        Ci = (g = "button", b = "." + (y = "bs.button"), w = ".data-api", x = (v = t).fn[g], E = "active", T = "btn", C = "focus", _ = '[data-toggle^="button"]', S = '[data-toggle="buttons"]', k = "input", A = ".active", D = ".btn", I = {
            CLICK_DATA_API: "click" + b + w,
            FOCUS_BLUR_DATA_API: "focus" + b + w + " blur" + b + w
        }, M = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.toggle = function() {
                var e = !0,
                    t = !0,
                    i = v(this._element).closest(S)[0];
                if (i) {
                    var n = v(this._element).find(k)[0];
                    if (n) {
                        if ("radio" === n.type)
                            if (n.checked && v(this._element).hasClass(E)) e = !1;
                            else {
                                var r = v(i).find(A)[0];
                                r && v(r).removeClass(E)
                            }
                        if (e) {
                            if (n.hasAttribute("disabled") || i.hasAttribute("disabled") || n.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            n.checked = !v(this._element).hasClass(E), v(n).trigger("change")
                        }
                        n.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !v(this._element).hasClass(E)), e && v(this._element).toggleClass(E)
            }, t.dispose = function() {
                v.removeData(this._element, y), this._element = null
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = v(this).data(y);
                    i || (i = new e(this), v(this).data(y, i)), "toggle" === t && i[t]()
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }]), e
        }(), v(document).on(I.CLICK_DATA_API, _, function(e) {
            e.preventDefault();
            var t = e.target;
            v(t).hasClass(T) || (t = v(t).closest(D)), M._jQueryInterface.call(v(t), "toggle")
        }).on(I.FOCUS_BLUR_DATA_API, _, function(e) {
            var t = v(e.target).closest(D)[0];
            v(t).toggleClass(C, /^focus(in)?$/.test(e.type))
        }), v.fn[g] = M._jQueryInterface, v.fn[g].Constructor = M, v.fn[g].noConflict = function() {
            return v.fn[g] = x, M._jQueryInterface
        }, M),
        _i = (O = "carousel", L = "." + (N = "bs.carousel"), z = ".data-api", j = (P = t).fn[O], H = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, R = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, $ = "next", q = "prev", B = "left", F = "right", W = {
            SLIDE: "slide" + L,
            SLID: "slid" + L,
            KEYDOWN: "keydown" + L,
            MOUSEENTER: "mouseenter" + L,
            MOUSELEAVE: "mouseleave" + L,
            TOUCHEND: "touchend" + L,
            LOAD_DATA_API: "load" + L + z,
            CLICK_DATA_API: "click" + L + z
        }, Y = "carousel", V = "active", G = "slide", X = "carousel-item-right", U = "carousel-item-left", K = "carousel-item-next", Q = "carousel-item-prev", J = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, Z = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = P(e)[0], this._indicatorsElement = P(this._element).find(J.INDICATORS)[0], this._addEventListeners()
            }
            var t = e.prototype;
            return t.next = function() {
                this._isSliding || this._slide($)
            }, t.nextWhenVisible = function() {
                !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next()
            }, t.prev = function() {
                this._isSliding || this._slide(q)
            }, t.pause = function(e) {
                e || (this._isPaused = !0), P(this._element).find(J.NEXT_PREV)[0] && Ei.supportsTransitionEnd() && (Ei.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function(e) {
                var t = this;
                this._activeElement = P(this._element).find(J.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) P(this._element).one(W.SLID, function() {
                        return t.to(e)
                    });
                    else {
                        if (i === e) return this.pause(), void this.cycle();
                        var n = e > i ? $ : q;
                        this._slide(n, this._items[e])
                    }
            }, t.dispose = function() {
                P(this._element).off(L), P.removeData(this._element, N), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function(e) {
                return e = a({}, H, e), Ei.typeCheckConfig(O, e, R), e
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && P(this._element).on(W.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && (P(this._element).on(W.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(W.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), "ontouchstart" in document.documentElement && P(this._element).on(W.TOUCHEND, function() {
                    e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }, t._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(e) {
                return this._items = P.makeArray(P(e).parent().find(J.ITEM)), this._items.indexOf(e)
            }, t._getItemByDirection = function(e, t) {
                var i = e === $,
                    n = e === q,
                    r = this._getItemIndex(t),
                    a = this._items.length - 1;
                if ((n && 0 === r || i && r === a) && !this._config.wrap) return t;
                var s = (r + (e === q ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, t._triggerSlideEvent = function(e, t) {
                var i = this._getItemIndex(e),
                    n = this._getItemIndex(P(this._element).find(J.ACTIVE_ITEM)[0]),
                    r = P.Event(W.SLIDE, {
                        relatedTarget: e,
                        direction: t,
                        from: n,
                        to: i
                    });
                return P(this._element).trigger(r), r
            }, t._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    P(this._indicatorsElement).find(J.ACTIVE).removeClass(V);
                    var t = this._indicatorsElement.children[this._getItemIndex(e)];
                    t && P(t).addClass(V)
                }
            }, t._slide = function(e, t) {
                var i, n, r, a = this,
                    s = P(this._element).find(J.ACTIVE_ITEM)[0],
                    o = this._getItemIndex(s),
                    l = t || s && this._getItemByDirection(e, s),
                    c = this._getItemIndex(l),
                    u = Boolean(this._interval);
                if (e === $ ? (i = U, n = K, r = B) : (i = X, n = Q, r = F), l && P(l).hasClass(V)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                    var d = P.Event(W.SLID, {
                        relatedTarget: l,
                        direction: r,
                        from: o,
                        to: c
                    });
                    Ei.supportsTransitionEnd() && P(this._element).hasClass(G) ? (P(l).addClass(n), Ei.reflow(l), P(s).addClass(i), P(l).addClass(i), P(s).one(Ei.TRANSITION_END, function() {
                        P(l).removeClass(i + " " + n).addClass(V), P(s).removeClass(V + " " + n + " " + i), a._isSliding = !1, setTimeout(function() {
                            return P(a._element).trigger(d)
                        }, 0)
                    }).emulateTransitionEnd(600)) : (P(s).removeClass(V), P(l).addClass(V), this._isSliding = !1, P(this._element).trigger(d)), u && this.cycle()
                }
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = P(this).data(N),
                        n = a({}, H, P(this).data());
                    "object" == typeof t && (n = a({}, n, t));
                    var r = "string" == typeof t ? t : n.slide;
                    if (i || (i = new e(this, n), P(this).data(N, i)), "number" == typeof t) i.to(t);
                    else if ("string" == typeof r) {
                        if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
                        i[r]()
                    } else n.interval && (i.pause(), i.cycle())
                })
            }, e._dataApiClickHandler = function(t) {
                var i = Ei.getSelectorFromElement(this);
                if (i) {
                    var n = P(i)[0];
                    if (n && P(n).hasClass(Y)) {
                        var r = a({}, P(n).data(), P(this).data()),
                            s = this.getAttribute("data-slide-to");
                        s && (r.interval = !1), e._jQueryInterface.call(P(n), r), s && P(n).data(N).to(s), t.preventDefault()
                    }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return H
                }
            }]), e
        }(), P(document).on(W.CLICK_DATA_API, J.DATA_SLIDE, Z._dataApiClickHandler), P(window).on(W.LOAD_DATA_API, function() {
            P(J.DATA_RIDE).each(function() {
                var e = P(this);
                Z._jQueryInterface.call(e, e.data())
            })
        }), P.fn[O] = Z._jQueryInterface, P.fn[O].Constructor = Z, P.fn[O].noConflict = function() {
            return P.fn[O] = j, Z._jQueryInterface
        }, Z),
        Si = (te = "collapse", ne = "." + (ie = "bs.collapse"), re = (ee = t).fn[te], ae = {
            toggle: !0,
            parent: ""
        }, se = {
            toggle: "boolean",
            parent: "(string|element)"
        }, oe = {
            SHOW: "show" + ne,
            SHOWN: "shown" + ne,
            HIDE: "hide" + ne,
            HIDDEN: "hidden" + ne,
            CLICK_DATA_API: "click" + ne + ".data-api"
        }, le = "show", ce = "collapse", ue = "collapsing", de = "collapsed", he = "width", pe = "height", fe = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, me = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = ee.makeArray(ee('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var i = ee(fe.DATA_TOGGLE), n = 0; n < i.length; n++) {
                    var r = i[n],
                        a = Ei.getSelectorFromElement(r);
                    null !== a && ee(a).filter(e).length > 0 && (this._selector = a, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = e.prototype;
            return t.toggle = function() {
                ee(this._element).hasClass(le) ? this.hide() : this.show()
            }, t.show = function() {
                var t, i, n = this;
                if (!this._isTransitioning && !ee(this._element).hasClass(le) && (this._parent && 0 === (t = ee.makeArray(ee(this._parent).find(fe.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (i = ee(t).not(this._selector).data(ie)) && i._isTransitioning))) {
                    var r = ee.Event(oe.SHOW);
                    if (ee(this._element).trigger(r), !r.isDefaultPrevented()) {
                        t && (e._jQueryInterface.call(ee(t).not(this._selector), "hide"), i || ee(t).data(ie, null));
                        var a = this._getDimension();
                        ee(this._element).removeClass(ce).addClass(ue), this._element.style[a] = 0, this._triggerArray.length > 0 && ee(this._triggerArray).removeClass(de).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var s = function() {
                            ee(n._element).removeClass(ue).addClass(ce).addClass(le), n._element.style[a] = "", n.setTransitioning(!1), ee(n._element).trigger(oe.SHOWN)
                        };
                        if (Ei.supportsTransitionEnd()) {
                            var o = "scroll" + (a[0].toUpperCase() + a.slice(1));
                            ee(this._element).one(Ei.TRANSITION_END, s).emulateTransitionEnd(600), this._element.style[a] = this._element[o] + "px"
                        } else s()
                    }
                }
            }, t.hide = function() {
                var e = this;
                if (!this._isTransitioning && ee(this._element).hasClass(le)) {
                    var t = ee.Event(oe.HIDE);
                    if (ee(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var i = this._getDimension();
                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", Ei.reflow(this._element), ee(this._element).addClass(ue).removeClass(ce).removeClass(le), this._triggerArray.length > 0)
                            for (var n = 0; n < this._triggerArray.length; n++) {
                                var r = this._triggerArray[n],
                                    a = Ei.getSelectorFromElement(r);
                                if (null !== a) ee(a).hasClass(le) || ee(r).addClass(de).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        var s = function() {
                            e.setTransitioning(!1), ee(e._element).removeClass(ue).addClass(ce).trigger(oe.HIDDEN)
                        };
                        this._element.style[i] = "", Ei.supportsTransitionEnd() ? ee(this._element).one(Ei.TRANSITION_END, s).emulateTransitionEnd(600) : s()
                    }
                }
            }, t.setTransitioning = function(e) {
                this._isTransitioning = e
            }, t.dispose = function() {
                ee.removeData(this._element, ie), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function(e) {
                return (e = a({}, ae, e)).toggle = Boolean(e.toggle), Ei.typeCheckConfig(te, e, se), e
            }, t._getDimension = function() {
                return ee(this._element).hasClass(he) ? he : pe
            }, t._getParent = function() {
                var t = this,
                    i = null;
                Ei.isElement(this._config.parent) ? (i = this._config.parent, void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = ee(this._config.parent)[0];
                var n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return ee(i).find(n).each(function(i, n) {
                    t._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                }), i
            }, t._addAriaAndCollapsedClass = function(e, t) {
                if (e) {
                    var i = ee(e).hasClass(le);
                    t.length > 0 && ee(t).toggleClass(de, !i).attr("aria-expanded", i)
                }
            }, e._getTargetFromElement = function(e) {
                var t = Ei.getSelectorFromElement(e);
                return t ? ee(t)[0] : null
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = ee(this),
                        n = i.data(ie),
                        r = a({}, ae, i.data(), "object" == typeof t && t);
                    if (!n && r.toggle && /show|hide/.test(t) && (r.toggle = !1), n || (n = new e(this, r), i.data(ie, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ae
                }
            }]), e
        }(), ee(document).on(oe.CLICK_DATA_API, fe.DATA_TOGGLE, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var t = ee(this),
                i = Ei.getSelectorFromElement(this);
            ee(i).each(function() {
                var e = ee(this),
                    i = e.data(ie) ? "toggle" : t.data();
                me._jQueryInterface.call(e, i)
            })
        }), ee.fn[te] = me._jQueryInterface, ee.fn[te].Constructor = me, ee.fn[te].noConflict = function() {
            return ee.fn[te] = re, me._jQueryInterface
        }, me),
        ki = (ge = "dropdown", be = "." + (ye = "bs.dropdown"), we = ".data-api", xe = (ve = t).fn[ge], Ee = new RegExp("38|40|27"), Te = {
            HIDE: "hide" + be,
            HIDDEN: "hidden" + be,
            SHOW: "show" + be,
            SHOWN: "shown" + be,
            CLICK: "click" + be,
            CLICK_DATA_API: "click" + be + we,
            KEYDOWN_DATA_API: "keydown" + be + we,
            KEYUP_DATA_API: "keyup" + be + we
        }, Ce = "disabled", _e = "show", Se = "dropup", ke = "dropright", Ae = "dropleft", De = "dropdown-menu-right", Ie = "dropdown-menu-left", Me = "position-static", Pe = '[data-toggle="dropdown"]', Oe = ".dropdown form", Ne = ".dropdown-menu", Le = ".navbar-nav", ze = ".dropdown-menu .dropdown-item:not(.disabled)", je = "top-start", He = "top-end", Re = "bottom-start", $e = "bottom-end", qe = "right-start", Be = "left-start", Fe = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent"
        }, We = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)"
        }, Ye = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = e.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !ve(this._element).hasClass(Ce)) {
                    var t = e._getParentFromElement(this._element),
                        n = ve(this._menu).hasClass(_e);
                    if (e._clearMenus(), !n) {
                        var r = {
                                relatedTarget: this._element
                            },
                            a = ve.Event(Te.SHOW, r);
                        if (ve(t).trigger(a), !a.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === i) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var s = this._element;
                                ve(t).hasClass(Se) && (ve(this._menu).hasClass(Ie) || ve(this._menu).hasClass(De)) && (s = t), "scrollParent" !== this._config.boundary && ve(t).addClass(Me), this._popper = new i(s, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === ve(t).closest(Le).length && ve("body").children().on("mouseover", null, ve.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), ve(this._menu).toggleClass(_e), ve(t).toggleClass(_e).trigger(ve.Event(Te.SHOWN, r))
                        }
                    }
                }
            }, t.dispose = function() {
                ve.removeData(this._element, ye), ve(this._element).off(be), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var e = this;
                ve(this._element).on(Te.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function(e) {
                return e = a({}, this.constructor.Default, ve(this._element).data(), e), Ei.typeCheckConfig(ge, e, this.constructor.DefaultType), e
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    this._menu = ve(t).find(Ne)[0]
                }
                return this._menu
            }, t._getPlacement = function() {
                var e = ve(this._element).parent(),
                    t = Re;
                return e.hasClass(Se) ? (t = je, ve(this._menu).hasClass(De) && (t = He)) : e.hasClass(ke) ? t = qe : e.hasClass(Ae) ? t = Be : ve(this._menu).hasClass(De) && (t = $e), t
            }, t._detectNavbar = function() {
                return ve(this._element).closest(".navbar").length > 0
            }, t._getPopperConfig = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = a({}, t.offsets, e._config.offset(t.offsets) || {}), t
                } : t.offset = this._config.offset, {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                }
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = ve(this).data(ye);
                    if (i || (i = new e(this, "object" == typeof t ? t : null), ve(this).data(ye, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, e._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var i = ve.makeArray(ve(Pe)), n = 0; n < i.length; n++) {
                        var r = e._getParentFromElement(i[n]),
                            a = ve(i[n]).data(ye),
                            s = {
                                relatedTarget: i[n]
                            };
                        if (a) {
                            var o = a._menu;
                            if (ve(r).hasClass(_e) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && ve.contains(r, t.target))) {
                                var l = ve.Event(Te.HIDE, s);
                                ve(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && ve("body").children().off("mouseover", null, ve.noop), i[n].setAttribute("aria-expanded", "false"), ve(o).removeClass(_e), ve(r).removeClass(_e).trigger(ve.Event(Te.HIDDEN, s)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, i = Ei.getSelectorFromElement(e);
                return i && (t = ve(i)[0]), t || e.parentNode
            }, e._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || ve(t.target).closest(Ne).length)) : Ee.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !ve(this).hasClass(Ce))) {
                    var i = e._getParentFromElement(this),
                        n = ve(i).hasClass(_e);
                    if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                        var r = ve(i).find(ze).get();
                        if (0 !== r.length) {
                            var a = r.indexOf(t.target);
                            38 === t.which && a > 0 && a--, 40 === t.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var s = ve(i).find(Pe)[0];
                            ve(s).trigger("focus")
                        }
                        ve(this).trigger("click")
                    }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Fe
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return We
                }
            }]), e
        }(), ve(document).on(Te.KEYDOWN_DATA_API, Pe, Ye._dataApiKeydownHandler).on(Te.KEYDOWN_DATA_API, Ne, Ye._dataApiKeydownHandler).on(Te.CLICK_DATA_API + " " + Te.KEYUP_DATA_API, Ye._clearMenus).on(Te.CLICK_DATA_API, Pe, function(e) {
            e.preventDefault(), e.stopPropagation(), Ye._jQueryInterface.call(ve(this), "toggle")
        }).on(Te.CLICK_DATA_API, Oe, function(e) {
            e.stopPropagation()
        }), ve.fn[ge] = Ye._jQueryInterface, ve.fn[ge].Constructor = Ye, ve.fn[ge].noConflict = function() {
            return ve.fn[ge] = xe, Ye._jQueryInterface
        }, Ye),
        Ai = (Ge = "modal", Ue = "." + (Xe = "bs.modal"), Ke = (Ve = t).fn[Ge], Qe = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, Je = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, Ze = {
            HIDE: "hide" + Ue,
            HIDDEN: "hidden" + Ue,
            SHOW: "show" + Ue,
            SHOWN: "shown" + Ue,
            FOCUSIN: "focusin" + Ue,
            RESIZE: "resize" + Ue,
            CLICK_DISMISS: "click.dismiss" + Ue,
            KEYDOWN_DISMISS: "keydown.dismiss" + Ue,
            MOUSEUP_DISMISS: "mouseup.dismiss" + Ue,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + Ue,
            CLICK_DATA_API: "click" + Ue + ".data-api"
        }, et = "modal-scrollbar-measure", tt = "modal-backdrop", it = "modal-open", nt = "fade", rt = "show", at = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, st = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = Ve(e).find(at.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
            }
            var t = e.prototype;
            return t.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, t.show = function(e) {
                var t = this;
                if (!this._isTransitioning && !this._isShown) {
                    Ei.supportsTransitionEnd() && Ve(this._element).hasClass(nt) && (this._isTransitioning = !0);
                    var i = Ve.Event(Ze.SHOW, {
                        relatedTarget: e
                    });
                    Ve(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Ve(document.body).addClass(it), this._setEscapeEvent(), this._setResizeEvent(), Ve(this._element).on(Ze.CLICK_DISMISS, at.DATA_DISMISS, function(e) {
                        return t.hide(e)
                    }), Ve(this._dialog).on(Ze.MOUSEDOWN_DISMISS, function() {
                        Ve(t._element).one(Ze.MOUSEUP_DISMISS, function(e) {
                            Ve(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return t._showElement(e)
                    }))
                }
            }, t.hide = function(e) {
                var t = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var i = Ve.Event(Ze.HIDE);
                    if (Ve(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var n = Ei.supportsTransitionEnd() && Ve(this._element).hasClass(nt);
                        n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Ve(document).off(Ze.FOCUSIN), Ve(this._element).removeClass(rt), Ve(this._element).off(Ze.CLICK_DISMISS), Ve(this._dialog).off(Ze.MOUSEDOWN_DISMISS), n ? Ve(this._element).one(Ei.TRANSITION_END, function(e) {
                            return t._hideModal(e)
                        }).emulateTransitionEnd(300) : this._hideModal()
                    }
                }
            }, t.dispose = function() {
                Ve.removeData(this._element, Xe), Ve(window, document, this._element, this._backdrop).off(Ue), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() {
                this._adjustDialog()
            }, t._getConfig = function(e) {
                return e = a({}, Qe, e), Ei.typeCheckConfig(Ge, e, Je), e
            }, t._showElement = function(e) {
                var t = this,
                    i = Ei.supportsTransitionEnd() && Ve(this._element).hasClass(nt);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && Ei.reflow(this._element), Ve(this._element).addClass(rt), this._config.focus && this._enforceFocus();
                var n = Ve.Event(Ze.SHOWN, {
                        relatedTarget: e
                    }),
                    r = function() {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, Ve(t._element).trigger(n)
                    };
                i ? Ve(this._dialog).one(Ei.TRANSITION_END, r).emulateTransitionEnd(300) : r()
            }, t._enforceFocus = function() {
                var e = this;
                Ve(document).off(Ze.FOCUSIN).on(Ze.FOCUSIN, function(t) {
                    document !== t.target && e._element !== t.target && 0 === Ve(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? Ve(this._element).on(Ze.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || Ve(this._element).off(Ze.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? Ve(window).on(Ze.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : Ve(window).off(Ze.RESIZE)
            }, t._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                    Ve(document.body).removeClass(it), e._resetAdjustments(), e._resetScrollbar(), Ve(e._element).trigger(Ze.HIDDEN)
                })
            }, t._removeBackdrop = function() {
                this._backdrop && (Ve(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function(e) {
                var t = this,
                    i = Ve(this._element).hasClass(nt) ? nt : "";
                if (this._isShown && this._config.backdrop) {
                    var n = Ei.supportsTransitionEnd() && i;
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = tt, i && Ve(this._backdrop).addClass(i), Ve(this._backdrop).appendTo(document.body), Ve(this._element).on(Ze.CLICK_DISMISS, function(e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                        }), n && Ei.reflow(this._backdrop), Ve(this._backdrop).addClass(rt), !e) return;
                    if (!n) return void e();
                    Ve(this._backdrop).one(Ei.TRANSITION_END, e).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                    Ve(this._backdrop).removeClass(rt);
                    var r = function() {
                        t._removeBackdrop(), e && e()
                    };
                    Ei.supportsTransitionEnd() && Ve(this._element).hasClass(nt) ? Ve(this._backdrop).one(Ei.TRANSITION_END, r).emulateTransitionEnd(150) : r()
                } else e && e()
            }, t._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    Ve(at.FIXED_CONTENT).each(function(t, i) {
                        var n = Ve(i)[0].style.paddingRight,
                            r = Ve(i).css("padding-right");
                        Ve(i).data("padding-right", n).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }), Ve(at.STICKY_CONTENT).each(function(t, i) {
                        var n = Ve(i)[0].style.marginRight,
                            r = Ve(i).css("margin-right");
                        Ve(i).data("margin-right", n).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    }), Ve(at.NAVBAR_TOGGLER).each(function(t, i) {
                        var n = Ve(i)[0].style.marginRight,
                            r = Ve(i).css("margin-right");
                        Ve(i).data("margin-right", n).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                    });
                    var t = document.body.style.paddingRight,
                        i = Ve("body").css("padding-right");
                    Ve("body").data("padding-right", t).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }, t._resetScrollbar = function() {
                Ve(at.FIXED_CONTENT).each(function(e, t) {
                    var i = Ve(t).data("padding-right");
                    void 0 !== i && Ve(t).css("padding-right", i).removeData("padding-right")
                }), Ve(at.STICKY_CONTENT + ", " + at.NAVBAR_TOGGLER).each(function(e, t) {
                    var i = Ve(t).data("margin-right");
                    void 0 !== i && Ve(t).css("margin-right", i).removeData("margin-right")
                });
                var e = Ve("body").data("padding-right");
                void 0 !== e && Ve("body").css("padding-right", e).removeData("padding-right")
            }, t._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = et, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(t, i) {
                return this.each(function() {
                    var n = Ve(this).data(Xe),
                        r = a({}, e.Default, Ve(this).data(), "object" == typeof t && t);
                    if (n || (n = new e(this, r), Ve(this).data(Xe, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t](i)
                    } else r.show && n.show(i)
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Qe
                }
            }]), e
        }(), Ve(document).on(Ze.CLICK_DATA_API, at.DATA_TOGGLE, function(e) {
            var t, i = this,
                n = Ei.getSelectorFromElement(this);
            n && (t = Ve(n)[0]);
            var r = Ve(t).data(Xe) ? "toggle" : a({}, Ve(t).data(), Ve(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var s = Ve(t).one(Ze.SHOW, function(e) {
                e.isDefaultPrevented() || s.one(Ze.HIDDEN, function() {
                    Ve(i).is(":visible") && i.focus()
                })
            });
            st._jQueryInterface.call(Ve(t), r, this)
        }), Ve.fn[Ge] = st._jQueryInterface, Ve.fn[Ge].Constructor = st, Ve.fn[Ge].noConflict = function() {
            return Ve.fn[Ge] = Ke, st._jQueryInterface
        }, st),
        Di = (lt = "tooltip", ut = "." + (ct = "bs.tooltip"), dt = (ot = t).fn[lt], ht = "bs-tooltip", pt = new RegExp("(^|\\s)" + ht + "\\S+", "g"), ft = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }, mt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }, vt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, gt = "show", yt = "out", bt = {
            HIDE: "hide" + ut,
            HIDDEN: "hidden" + ut,
            SHOW: "show" + ut,
            SHOWN: "shown" + ut,
            INSERTED: "inserted" + ut,
            CLICK: "click" + ut,
            FOCUSIN: "focusin" + ut,
            FOCUSOUT: "focusout" + ut,
            MOUSEENTER: "mouseenter" + ut,
            MOUSELEAVE: "mouseleave" + ut
        }, wt = "fade", xt = "show", Et = ".tooltip-inner", Tt = ".arrow", Ct = "hover", _t = "focus", St = "click", kt = "manual", At = function() {
            function e(e, t) {
                if (void 0 === i) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var t = e.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }, t.disable = function() {
                this._isEnabled = !1
            }, t.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            i = ot(e.currentTarget).data(t);
                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), ot(e.currentTarget).data(t, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (ot(this.getTipElement()).hasClass(xt)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() {
                clearTimeout(this._timeout), ot.removeData(this.element, this.constructor.DATA_KEY), ot(this.element).off(this.constructor.EVENT_KEY), ot(this.element).closest(".modal").off("hide.bs.modal"), this.tip && ot(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function() {
                var t = this;
                if ("none" === ot(this.element).css("display")) throw new Error("Please use show on visible elements");
                var n = ot.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    ot(this.element).trigger(n);
                    var r = ot.contains(this.element.ownerDocument.documentElement, this.element);
                    if (n.isDefaultPrevented() || !r) return;
                    var a = this.getTipElement(),
                        s = Ei.getUID(this.constructor.NAME);
                    a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && ot(a).addClass(wt);
                    var o = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                        l = this._getAttachment(o);
                    this.addAttachmentClass(l);
                    var c = !1 === this.config.container ? document.body : ot(this.config.container);
                    ot(a).data(this.constructor.DATA_KEY, this), ot.contains(this.element.ownerDocument.documentElement, this.tip) || ot(a).appendTo(c), ot(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, a, {
                        placement: l,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: Tt
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function(e) {
                            t._handlePopperPlacementChange(e)
                        }
                    }), ot(a).addClass(xt), "ontouchstart" in document.documentElement && ot("body").children().on("mouseover", null, ot.noop);
                    var u = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, ot(t.element).trigger(t.constructor.Event.SHOWN), e === yt && t._leave(null, t)
                    };
                    Ei.supportsTransitionEnd() && ot(this.tip).hasClass(wt) ? ot(this.tip).one(Ei.TRANSITION_END, u).emulateTransitionEnd(e._TRANSITION_DURATION) : u()
                }
            }, t.hide = function(e) {
                var t = this,
                    i = this.getTipElement(),
                    n = ot.Event(this.constructor.Event.HIDE),
                    r = function() {
                        t._hoverState !== gt && i.parentNode && i.parentNode.removeChild(i), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), ot(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                    };
                ot(this.element).trigger(n), n.isDefaultPrevented() || (ot(i).removeClass(xt), "ontouchstart" in document.documentElement && ot("body").children().off("mouseover", null, ot.noop), this._activeTrigger[St] = !1, this._activeTrigger[_t] = !1, this._activeTrigger[Ct] = !1, Ei.supportsTransitionEnd() && ot(this.tip).hasClass(wt) ? ot(i).one(Ei.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "")
            }, t.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function() {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function(e) {
                ot(this.getTipElement()).addClass(ht + "-" + e)
            }, t.getTipElement = function() {
                return this.tip = this.tip || ot(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var e = ot(this.getTipElement());
                this.setElementContent(e.find(Et), this.getTitle()), e.removeClass(wt + " " + xt)
            }, t.setElementContent = function(e, t) {
                var i = this.config.html;
                "object" == typeof t && (t.nodeType || t.jquery) ? i ? ot(t).parent().is(e) || e.empty().append(t) : e.text(ot(t).text()) : e[i ? "html" : "text"](t)
            }, t.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, t._getAttachment = function(e) {
                return mt[e.toUpperCase()]
            }, t._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) ot(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                    else if (t !== kt) {
                        var i = t === Ct ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            n = t === Ct ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        ot(e.element).on(i, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(n, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                    ot(e.element).closest(".modal").on("hide.bs.modal", function() {
                        return e.hide()
                    })
                }), this.config.selector ? this.config = a({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(e, t) {
                var i = this.constructor.DATA_KEY;
                (t = t || ot(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), ot(e.currentTarget).data(i, t)), e && (t._activeTrigger["focusin" === e.type ? _t : Ct] = !0), ot(t.getTipElement()).hasClass(xt) || t._hoverState === gt ? t._hoverState = gt : (clearTimeout(t._timeout), t._hoverState = gt, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                    t._hoverState === gt && t.show()
                }, t.config.delay.show) : t.show())
            }, t._leave = function(e, t) {
                var i = this.constructor.DATA_KEY;
                (t = t || ot(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), ot(e.currentTarget).data(i, t)), e && (t._activeTrigger["focusout" === e.type ? _t : Ct] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = yt, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                    t._hoverState === yt && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, t._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, t._getConfig = function(e) {
                return "number" == typeof(e = a({}, this.constructor.Default, ot(this.element).data(), e)).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), Ei.typeCheckConfig(lt, e, this.constructor.DefaultType), e
            }, t._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, t._cleanTipClass = function() {
                var e = ot(this.getTipElement()),
                    t = e.attr("class").match(pt);
                null !== t && t.length > 0 && e.removeClass(t.join(""))
            }, t._handlePopperPlacementChange = function(e) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, t._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (ot(e).removeClass(wt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = ot(this).data(ct),
                        n = "object" == typeof t && t;
                    if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, n), ot(this).data(ct, i)), "string" == typeof t)) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return vt
                }
            }, {
                key: "NAME",
                get: function() {
                    return lt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return ct
                }
            }, {
                key: "Event",
                get: function() {
                    return bt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ut
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ft
                }
            }]), e
        }(), ot.fn[lt] = At._jQueryInterface, ot.fn[lt].Constructor = At, ot.fn[lt].noConflict = function() {
            return ot.fn[lt] = dt, At._jQueryInterface
        }, At),
        Ii = (It = "popover", Pt = "." + (Mt = "bs.popover"), Ot = (Dt = t).fn[It], Nt = "bs-popover", Lt = new RegExp("(^|\\s)" + Nt + "\\S+", "g"), zt = a({}, Di.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), jt = a({}, Di.DefaultType, {
            content: "(string|element|function)"
        }), Ht = "fade", Rt = "show", $t = ".popover-header", qt = ".popover-body", Bt = {
            HIDE: "hide" + Pt,
            HIDDEN: "hidden" + Pt,
            SHOW: "show" + Pt,
            SHOWN: "shown" + Pt,
            INSERTED: "inserted" + Pt,
            CLICK: "click" + Pt,
            FOCUSIN: "focusin" + Pt,
            FOCUSOUT: "focusout" + Pt,
            MOUSEENTER: "mouseenter" + Pt,
            MOUSELEAVE: "mouseleave" + Pt
        }, Ft = function(e) {
            var t, i;

            function n() {
                return e.apply(this, arguments) || this
            }
            i = e, (t = n).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i;
            var a = n.prototype;
            return a.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, a.addAttachmentClass = function(e) {
                Dt(this.getTipElement()).addClass(Nt + "-" + e)
            }, a.getTipElement = function() {
                return this.tip = this.tip || Dt(this.config.template)[0], this.tip
            }, a.setContent = function() {
                var e = Dt(this.getTipElement());
                this.setElementContent(e.find($t), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(qt), t), e.removeClass(Ht + " " + Rt)
            }, a._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, a._cleanTipClass = function() {
                var e = Dt(this.getTipElement()),
                    t = e.attr("class").match(Lt);
                null !== t && t.length > 0 && e.removeClass(t.join(""))
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = Dt(this).data(Mt),
                        i = "object" == typeof e ? e : null;
                    if ((t || !/destroy|hide/.test(e)) && (t || (t = new n(this, i), Dt(this).data(Mt, t)), "string" == typeof e)) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, r(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return zt
                }
            }, {
                key: "NAME",
                get: function() {
                    return It
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Mt
                }
            }, {
                key: "Event",
                get: function() {
                    return Bt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Pt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return jt
                }
            }]), n
        }(Di), Dt.fn[It] = Ft._jQueryInterface, Dt.fn[It].Constructor = Ft, Dt.fn[It].noConflict = function() {
            return Dt.fn[It] = Ot, Ft._jQueryInterface
        }, Ft),
        Mi = (Yt = "scrollspy", Gt = "." + (Vt = "bs.scrollspy"), Xt = (Wt = t).fn[Yt], Ut = {
            offset: 10,
            method: "auto",
            target: ""
        }, Kt = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, Qt = {
            ACTIVATE: "activate" + Gt,
            SCROLL: "scroll" + Gt,
            LOAD_DATA_API: "load" + Gt + ".data-api"
        }, Jt = "dropdown-item", Zt = "active", ei = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, ti = "offset", ii = "position", ni = function() {
            function e(e, t) {
                var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + ei.NAV_LINKS + "," + this._config.target + " " + ei.LIST_ITEMS + "," + this._config.target + " " + ei.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Wt(this._scrollElement).on(Qt.SCROLL, function(e) {
                    return i._process(e)
                }), this.refresh(), this._process()
            }
            var t = e.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? ti : ii,
                    i = "auto" === this._config.method ? t : this._config.method,
                    n = i === ii ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Wt.makeArray(Wt(this._selector)).map(function(e) {
                    var t, r = Ei.getSelectorFromElement(e);
                    if (r && (t = Wt(r)[0]), t) {
                        var a = t.getBoundingClientRect();
                        if (a.width || a.height) return [Wt(t)[i]().top + n, r]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function() {
                Wt.removeData(this._element, Vt), Wt(this._scrollElement).off(Gt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function(e) {
                if ("string" != typeof(e = a({}, Ut, e)).target) {
                    var t = Wt(e.target).attr("id");
                    t || (t = Ei.getUID(Yt), Wt(e.target).attr("id", t)), e.target = "#" + t
                }
                return Ei.typeCheckConfig(Yt, e, Kt), e
            }, t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    i = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= i) {
                    var n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",");
                t = t.map(function(t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var i = Wt(t.join(","));
                i.hasClass(Jt) ? (i.closest(ei.DROPDOWN).find(ei.DROPDOWN_TOGGLE).addClass(Zt), i.addClass(Zt)) : (i.addClass(Zt), i.parents(ei.NAV_LIST_GROUP).prev(ei.NAV_LINKS + ", " + ei.LIST_ITEMS).addClass(Zt), i.parents(ei.NAV_LIST_GROUP).prev(ei.NAV_ITEMS).children(ei.NAV_LINKS).addClass(Zt)), Wt(this._scrollElement).trigger(Qt.ACTIVATE, {
                    relatedTarget: e
                })
            }, t._clear = function() {
                Wt(this._selector).filter(ei.ACTIVE).removeClass(Zt)
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = Wt(this).data(Vt);
                    if (i || (i = new e(this, "object" == typeof t && t), Wt(this).data(Vt, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ut
                }
            }]), e
        }(), Wt(window).on(Qt.LOAD_DATA_API, function() {
            for (var e = Wt.makeArray(Wt(ei.DATA_SPY)), t = e.length; t--;) {
                var i = Wt(e[t]);
                ni._jQueryInterface.call(i, i.data())
            }
        }), Wt.fn[Yt] = ni._jQueryInterface, Wt.fn[Yt].Constructor = ni, Wt.fn[Yt].noConflict = function() {
            return Wt.fn[Yt] = Xt, ni._jQueryInterface
        }, ni),
        Pi = (si = "." + (ai = "bs.tab"), oi = (ri = t).fn.tab, li = {
            HIDE: "hide" + si,
            HIDDEN: "hidden" + si,
            SHOW: "show" + si,
            SHOWN: "shown" + si,
            CLICK_DATA_API: "click" + si + ".data-api"
        }, ci = "dropdown-menu", ui = "active", di = "disabled", hi = "fade", pi = "show", fi = ".dropdown", mi = ".nav, .list-group", vi = ".active", gi = "> li > .active", yi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', bi = ".dropdown-toggle", wi = "> .dropdown-menu .active", xi = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ri(this._element).hasClass(ui) || ri(this._element).hasClass(di))) {
                    var t, i, n = ri(this._element).closest(mi)[0],
                        r = Ei.getSelectorFromElement(this._element);
                    if (n) {
                        var a = "UL" === n.nodeName ? gi : vi;
                        i = (i = ri.makeArray(ri(n).find(a)))[i.length - 1]
                    }
                    var s = ri.Event(li.HIDE, {
                            relatedTarget: this._element
                        }),
                        o = ri.Event(li.SHOW, {
                            relatedTarget: i
                        });
                    if (i && ri(i).trigger(s), ri(this._element).trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (t = ri(r)[0]), this._activate(this._element, n);
                        var l = function() {
                            var t = ri.Event(li.HIDDEN, {
                                    relatedTarget: e._element
                                }),
                                n = ri.Event(li.SHOWN, {
                                    relatedTarget: i
                                });
                            ri(i).trigger(t), ri(e._element).trigger(n)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function() {
                ri.removeData(this._element, ai), this._element = null
            }, t._activate = function(e, t, i) {
                var n = this,
                    r = ("UL" === t.nodeName ? ri(t).find(gi) : ri(t).children(vi))[0],
                    a = i && Ei.supportsTransitionEnd() && r && ri(r).hasClass(hi),
                    s = function() {
                        return n._transitionComplete(e, r, i)
                    };
                r && a ? ri(r).one(Ei.TRANSITION_END, s).emulateTransitionEnd(150) : s()
            }, t._transitionComplete = function(e, t, i) {
                if (t) {
                    ri(t).removeClass(pi + " " + ui);
                    var n = ri(t.parentNode).find(wi)[0];
                    n && ri(n).removeClass(ui), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (ri(e).addClass(ui), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), Ei.reflow(e), ri(e).addClass(pi), e.parentNode && ri(e.parentNode).hasClass(ci)) {
                    var r = ri(e).closest(fi)[0];
                    r && ri(r).find(bi).addClass(ui), e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = ri(this),
                        n = i.data(ai);
                    if (n || (n = new e(this), i.data(ai, n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }]), e
        }(), ri(document).on(li.CLICK_DATA_API, yi, function(e) {
            e.preventDefault(), xi._jQueryInterface.call(ri(this), "show")
        }), ri.fn.tab = xi._jQueryInterface, ri.fn.tab.Constructor = xi, ri.fn.tab.noConflict = function() {
            return ri.fn.tab = oi, xi._jQueryInterface
        }, xi);
    ! function(e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = Ei, e.Alert = Ti, e.Button = Ci, e.Carousel = _i, e.Collapse = Si, e.Dropdown = ki, e.Modal = Ai, e.Popover = Ii, e.Scrollspy = Mi, e.Tab = Pi, e.Tooltip = Di, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, i, n, r) {
            return jQuery.easing[jQuery.easing.def](e, t, i, n, r)
        },
        easeInQuad: function(e, t, i, n, r) {
            return n * (t /= r) * t + i
        },
        easeOutQuad: function(e, t, i, n, r) {
            return -n * (t /= r) * (t - 2) + i
        },
        easeInOutQuad: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function(e, t, i, n, r) {
            return n * (t /= r) * t * t + i
        },
        easeOutCubic: function(e, t, i, n, r) {
            return n * ((t = t / r - 1) * t * t + 1) + i
        },
        easeInOutCubic: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function(e, t, i, n, r) {
            return n * (t /= r) * t * t * t + i
        },
        easeOutQuart: function(e, t, i, n, r) {
            return -n * ((t = t / r - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function(e, t, i, n, r) {
            return n * (t /= r) * t * t * t * t + i
        },
        easeOutQuint: function(e, t, i, n, r) {
            return n * ((t = t / r - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function(e, t, i, n, r) {
            return -n * Math.cos(t / r * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(e, t, i, n, r) {
            return n * Math.sin(t / r * (Math.PI / 2)) + i
        },
        easeInOutSine: function(e, t, i, n, r) {
            return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + i
        },
        easeInExpo: function(e, t, i, n, r) {
            return 0 == t ? i : n * Math.pow(2, 10 * (t / r - 1)) + i
        },
        easeOutExpo: function(e, t, i, n, r) {
            return t == r ? i + n : n * (1 - Math.pow(2, -10 * t / r)) + i
        },
        easeInOutExpo: function(e, t, i, n, r) {
            return 0 == t ? i : t == r ? i + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --t)) + i
        },
        easeInCirc: function(e, t, i, n, r) {
            return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + i
        },
        easeOutCirc: function(e, t, i, n, r) {
            return n * Math.sqrt(1 - (t = t / r - 1) * t) + i
        },
        easeInOutCirc: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function(e, t, i, n, r) {
            var a = 1.70158,
                s = 0,
                o = n;
            if (0 == t) return i;
            if (1 == (t /= r)) return i + n;
            if (s || (s = .3 * r), o < Math.abs(n)) {
                o = n;
                a = s / 4
            } else a = s / (2 * Math.PI) * Math.asin(n / o);
            return -o * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / s) + i
        },
        easeOutElastic: function(e, t, i, n, r) {
            var a = 1.70158,
                s = 0,
                o = n;
            if (0 == t) return i;
            if (1 == (t /= r)) return i + n;
            if (s || (s = .3 * r), o < Math.abs(n)) {
                o = n;
                a = s / 4
            } else a = s / (2 * Math.PI) * Math.asin(n / o);
            return o * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - a) * Math.PI / s) + n + i
        },
        easeInOutElastic: function(e, t, i, n, r) {
            var a = 1.70158,
                s = 0,
                o = n;
            if (0 == t) return i;
            if (2 == (t /= r / 2)) return i + n;
            if (s || (s = .3 * r * 1.5), o < Math.abs(n)) {
                o = n;
                a = s / 4
            } else a = s / (2 * Math.PI) * Math.asin(n / o);
            return t < 1 ? -.5 * o * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / s) + i : o * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / s) * .5 + n + i
        },
        easeInBack: function(e, t, i, n, r, a) {
            return null == a && (a = 1.70158), n * (t /= r) * t * ((a + 1) * t - a) + i
        },
        easeOutBack: function(e, t, i, n, r, a) {
            return null == a && (a = 1.70158), n * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + i
        },
        easeInOutBack: function(e, t, i, n, r, a) {
            return null == a && (a = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (a *= 1.525)) * t - a) + i : n / 2 * ((t -= 2) * t * ((1 + (a *= 1.525)) * t + a) + 2) + i
        },
        easeInBounce: function(e, t, i, n, r) {
            return n - jQuery.easing.easeOutBounce(e, r - t, 0, n, r) + i
        },
        easeOutBounce: function(e, t, i, n, r) {
            return (t /= r) < 1 / 2.75 ? 7.5625 * n * t * t + i : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
        },
        easeInOutBounce: function(e, t, i, n, r) {
            return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, n, r) + .5 * n + i
        }
    }),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
    }(this, function() {
        return function(e) {
            function t(n) {
                if (i[n]) return i[n].exports;
                var r = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
            }
            var i = {};
            return t.m = e, t.c = i, t.p = "dist/", t(0)
        }([function(e, t, i) {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                },
                a = n((n(i(1)), i(5))),
                s = n(i(6)),
                o = n(i(7)),
                l = n(i(8)),
                c = n(i(9)),
                u = n(i(10)),
                d = n(i(13)),
                h = [],
                p = !1,
                f = document.all && !window.atob,
                m = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded"
                },
                v = function() {
                    return !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0] && (p = !0), p ? (h = (0, u.default)(h, m), (0, c.default)(h, m.once), h) : void 0
                },
                g = function() {
                    h = (0, d.default)(), v()
                };
            e.exports = {
                init: function(e) {
                    return m = r(m, e), h = (0, d.default)(), !0 === (t = m.disable) || "mobile" === t && l.default.mobile() || "phone" === t && l.default.phone() || "tablet" === t && l.default.tablet() || "function" == typeof t && !0 === t() || f ? void h.forEach(function(e, t) {
                        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                    }) : (document.querySelector("body").setAttribute("data-aos-easing", m.easing), document.querySelector("body").setAttribute("data-aos-duration", m.duration), document.querySelector("body").setAttribute("data-aos-delay", m.delay), "DOMContentLoaded" === m.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? v(!0) : "load" === m.startEvent ? window.addEventListener(m.startEvent, function() {
                        v(!0)
                    }) : document.addEventListener(m.startEvent, function() {
                        v(!0)
                    }), window.addEventListener("resize", (0, s.default)(v, 50, !0)), window.addEventListener("orientationchange", (0, s.default)(v, 50, !0)), window.addEventListener("scroll", (0, a.default)(function() {
                        (0, c.default)(h, m.once)
                    }, 99)), document.addEventListener("DOMNodeRemoved", function(e) {
                        var t = e.target;
                        t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, s.default)(g, 50, !0)
                    }), (0, o.default)("[data-aos]", g), h);
                    var t
                },
                refresh: v,
                refreshHard: g
            }
        }, function(e, t) {}, , , , function(e, t, i) {
            "use strict";
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                r = i(6),
                a = "Expected a function";
            e.exports = function(e, t, i) {
                var s, o, l = !0,
                    c = !0;
                if ("function" != typeof e) throw new TypeError(a);
                return o = void 0 === (s = i) ? "undefined" : n(s), !!s && ("object" == o || "function" == o) && (l = "leading" in i ? !!i.leading : l, c = "trailing" in i ? !!i.trailing : c), r(e, t, {
                    leading: l,
                    maxWait: t,
                    trailing: c
                })
            }
        }, function(e, t) {
            "use strict";

            function i(e) {
                var t = void 0 === e ? "undefined" : a(e);
                return !!e && ("object" == t || "function" == t)
            }

            function n(e) {
                return "symbol" == (void 0 === e ? "undefined" : a(e)) || !!(t = e) && "object" == (void 0 === t ? "undefined" : a(t)) && v.call(e) == u;
                var t
            }

            function r(e) {
                if ("number" == typeof e) return e;
                if (n(e)) return o;
                if (i(e)) {
                    var t = (r = e.valueOf, (a = i(r) ? v.call(r) : "") == l || a == c ? e.valueOf() : e);
                    e = i(t) ? t + "" : t
                }
                var r, a;
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(d, "");
                var s = p.test(e);
                return s || f.test(e) ? m(e.slice(2), s ? 2 : 8) : h.test(e) ? o : +e
            }
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                s = "Expected a function",
                o = NaN,
                l = "[object Function]",
                c = "[object GeneratorFunction]",
                u = "[object Symbol]",
                d = /^\s+|\s+$/g,
                h = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i,
                f = /^0o[0-7]+$/i,
                m = parseInt,
                v = Object.prototype.toString,
                g = Math.max,
                y = Math.min,
                b = Date.now;
            e.exports = function(e, t, n) {
                function a(t) {
                    var i = d,
                        n = h;
                    return d = h = void 0, w = t, f = e.apply(n, i)
                }

                function o(e) {
                    var i = e - v;
                    return !v || i >= t || 0 > i || E && e - w >= p
                }

                function l() {
                    var e, i, n = b();
                    return o(n) ? c(n) : void(m = setTimeout(l, (e = n, i = t - (e - v), E ? y(i, p - (e - w)) : i)))
                }

                function c(e) {
                    return clearTimeout(m), m = void 0, T && d ? a(e) : (d = h = void 0, f)
                }

                function u() {
                    var e, i = b(),
                        n = o(i);
                    if (d = arguments, h = this, v = i, n) {
                        if (void 0 === m) return w = e = v, m = setTimeout(l, t), x ? a(e) : f;
                        if (E) return clearTimeout(m), m = setTimeout(l, t), a(v)
                    }
                    return void 0 === m && (m = setTimeout(l, t)), f
                }
                var d, h, p, f, m, v = 0,
                    w = 0,
                    x = !1,
                    E = !1,
                    T = !0;
                if ("function" != typeof e) throw new TypeError(s);
                return t = r(t) || 0, i(n) && (x = !!n.leading, p = (E = "maxWait" in n) ? g(r(n.maxWait) || 0, t) : p, T = "trailing" in n ? !!n.trailing : T), u.cancel = function() {
                    void 0 !== m && clearTimeout(m), v = w = 0, d = h = m = void 0
                }, u.flush = function() {
                    return void 0 === m ? f : c(b())
                }, u
            }
        }, function(e, t) {
            "use strict";

            function i() {
                for (var e, t, i = 0, r = a.length; r > i; i++) {
                    e = a[i];
                    for (var s, o = 0, l = (t = n.querySelectorAll(e.selector)).length; l > o; o++)(s = t[o]).ready || (s.ready = !0, e.fn.call(s, s))
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = window.document,
                r = window.MutationObserver || window.WebKitMutationObserver,
                a = [],
                s = void 0;
            t.default = function(e, t) {
                a.push({
                    selector: e,
                    fn: t
                }), !s && r && (s = new r(i)).observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                }), i()
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t
                    }
                }(),
                n = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    return i(e, [{
                        key: "phone",
                        value: function() {
                            var e, t = !1;
                            return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var e, t = !1;
                            return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), e
                }();
            t.default = new n
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e, t) {
                var i = window.pageYOffset,
                    n = window.innerHeight;
                e.forEach(function(e, r) {
                    var a, s, o, l;
                    s = n + i, o = t, l = (a = e).node.getAttribute("data-aos-once"), s > a.position ? a.node.classList.add("aos-animate") : void 0 !== l && ("false" === l || !o && "true" !== l) && a.node.classList.remove("aos-animate")
                })
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, r = i(11),
                a = (n = r) && n.__esModule ? n : {
                    default: n
                };
            t.default = function(e, t) {
                return e.forEach(function(e, i) {
                    e.node.classList.add("aos-init"), e.position = (0, a.default)(e.node, t.offset)
                }), e
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, r = i(12),
                a = (n = r) && n.__esModule ? n : {
                    default: n
                };
            t.default = function(e, t) {
                var i = 0,
                    n = 0,
                    r = window.innerHeight,
                    s = {
                        offset: e.getAttribute("data-aos-offset"),
                        anchor: e.getAttribute("data-aos-anchor"),
                        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                    };
                switch (s.offset && !isNaN(s.offset) && (n = parseInt(s.offset)), s.anchor && document.querySelectorAll(s.anchor) && (e = document.querySelectorAll(s.anchor)[0]), i = (0, a.default)(e).top, s.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        i += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        i += e.offsetHeight;
                        break;
                    case "top-center":
                        i += r / 2;
                        break;
                    case "bottom-center":
                        i += r / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        i += r / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        i += r;
                        break;
                    case "bottom-top":
                        i += e.offsetHeight + r;
                        break;
                    case "center-top":
                        i += e.offsetHeight / 2 + r
                }
                return s.anchorPlacement || s.offset || isNaN(t) || (n = t), i + n
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {
                    top: i,
                    left: t
                }
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                e = e || document.querySelectorAll("[data-aos]");
                var t = [];
                return [].forEach.call(e, function(e, i) {
                    t.push({
                        node: e
                    })
                }), t
            }
        }])
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
    }(this, function() {
        "use strict";
        var e = "undefined" == typeof document ? {
                body: {},
                addEventListener: function() {},
                removeEventListener: function() {},
                activeElement: {
                    blur: function() {},
                    nodeName: ""
                },
                querySelector: function() {
                    return null
                },
                querySelectorAll: function() {
                    return []
                },
                getElementById: function() {
                    return null
                },
                createEvent: function() {
                    return {
                        initEvent: function() {}
                    }
                },
                createElement: function() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function() {},
                        getElementsByTagName: function() {
                            return []
                        }
                    }
                },
                location: {
                    hash: ""
                }
            } : document,
            t = "undefined" == typeof window ? {
                document: e,
                navigator: {
                    userAgent: ""
                },
                location: {},
                history: {},
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {}
            } : window,
            i = function(e) {
                for (var t = 0; t < e.length; t += 1) this[t] = e[t];
                return this.length = e.length, this
            };

        function n(n, r) {
            var a = [],
                s = 0;
            if (n && !r && n instanceof i) return n;
            if (n)
                if ("string" == typeof n) {
                    var o, l, c = n.trim();
                    if (c.indexOf("<") >= 0 && c.indexOf(">") >= 0) {
                        var u = "div";
                        for (0 === c.indexOf("<li") && (u = "ul"), 0 === c.indexOf("<tr") && (u = "tbody"), 0 !== c.indexOf("<td") && 0 !== c.indexOf("<th") || (u = "tr"), 0 === c.indexOf("<tbody") && (u = "table"), 0 === c.indexOf("<option") && (u = "select"), (l = e.createElement(u)).innerHTML = c, s = 0; s < l.childNodes.length; s += 1) a.push(l.childNodes[s])
                    } else
                        for (o = r || "#" !== n[0] || n.match(/[ .<>:~]/) ? (r || e).querySelectorAll(n.trim()) : [e.getElementById(n.trim().split("#")[1])], s = 0; s < o.length; s += 1) o[s] && a.push(o[s])
                } else if (n.nodeType || n === t || n === e) a.push(n);
            else if (n.length > 0 && n[0].nodeType)
                for (s = 0; s < n.length; s += 1) a.push(n[s]);
            return new i(a)
        }

        function r(e) {
            for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }
        n.fn = i.prototype, n.Class = i, n.Dom7 = i;
        "resize scroll".split(" ");
        var a = {
            addClass: function(e) {
                if (void 0 === e) return this;
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.add(t[i]);
                return this
            },
            removeClass: function(e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.remove(t[i]);
                return this
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function(e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
                return this
            },
            attr: function(e, t) {
                var i = arguments;
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var n = 0; n < this.length; n += 1)
                    if (2 === i.length) this[n].setAttribute(e, t);
                    else
                        for (var r in e) this[n][r] = e[r], this[n].setAttribute(r, e[r]);
                return this
            },
            removeAttr: function(e) {
                for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            },
            data: function(e, t) {
                var i;
                if (void 0 !== t) {
                    for (var n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                    return this
                }
                if (i = this[0]) {
                    if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                    var r = i.getAttribute("data-" + e);
                    return r || void 0
                }
            },
            transform: function(e) {
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransform = e, i.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransitionDuration = e, i.transitionDuration = e
                }
                return this
            },
            on: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                var i, r = e[0],
                    a = e[1],
                    s = e[2],
                    o = e[3];

                function l(e) {
                    var t = e.target;
                    if (t) {
                        var i = e.target.dom7EventData || [];
                        if (i.unshift(e), n(t).is(a)) s.apply(t, i);
                        else
                            for (var r = n(t).parents(), o = 0; o < r.length; o += 1) n(r[o]).is(a) && s.apply(r[o], i)
                    }
                }

                function c(e) {
                    var t = e && e.target && e.target.dom7EventData || [];
                    t.unshift(e), s.apply(this, t)
                }
                "function" == typeof e[1] && (r = (i = e)[0], s = i[1], o = i[2], a = void 0), o || (o = !1);
                for (var u, d = r.split(" "), h = 0; h < this.length; h += 1) {
                    var p = this[h];
                    if (a)
                        for (u = 0; u < d.length; u += 1) p.dom7LiveListeners || (p.dom7LiveListeners = []), p.dom7LiveListeners.push({
                            type: r,
                            listener: s,
                            proxyListener: l
                        }), p.addEventListener(d[u], l, o);
                    else
                        for (u = 0; u < d.length; u += 1) p.dom7Listeners || (p.dom7Listeners = []), p.dom7Listeners.push({
                            type: r,
                            listener: s,
                            proxyListener: c
                        }), p.addEventListener(d[u], c, o)
                }
                return this
            },
            off: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                var i, n = e[0],
                    r = e[1],
                    a = e[2],
                    s = e[3];
                "function" == typeof e[1] && (n = (i = e)[0], a = i[1], s = i[2], r = void 0), s || (s = !1);
                for (var o = n.split(" "), l = 0; l < o.length; l += 1)
                    for (var c = 0; c < this.length; c += 1) {
                        var u = this[c];
                        if (r) {
                            if (u.dom7LiveListeners)
                                for (var d = 0; d < u.dom7LiveListeners.length; d += 1) a ? u.dom7LiveListeners[d].listener === a && u.removeEventListener(o[l], u.dom7LiveListeners[d].proxyListener, s) : u.dom7LiveListeners[d].type === o[l] && u.removeEventListener(o[l], u.dom7LiveListeners[d].proxyListener, s)
                        } else if (u.dom7Listeners)
                            for (var h = 0; h < u.dom7Listeners.length; h += 1) a ? u.dom7Listeners[h].listener === a && u.removeEventListener(o[l], u.dom7Listeners[h].proxyListener, s) : u.dom7Listeners[h].type === o[l] && u.removeEventListener(o[l], u.dom7Listeners[h].proxyListener, s)
                    }
                return this
            },
            trigger: function() {
                for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
                for (var r = i[0].split(" "), a = i[1], s = 0; s < r.length; s += 1)
                    for (var o = 0; o < this.length; o += 1) {
                        var l = void 0;
                        try {
                            l = new t.CustomEvent(r[s], {
                                detail: a,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (t) {
                            (l = e.createEvent("Event")).initEvent(r[s], !0, !0), l.detail = a
                        }
                        this[o].dom7EventData = i.filter(function(e, t) {
                            return t > 0
                        }), this[o].dispatchEvent(l), this[o].dom7EventData = [], delete this[o].dom7EventData
                    }
                return this
            },
            transitionEnd: function(e) {
                var t, i = ["webkitTransitionEnd", "transitionend"],
                    n = this;

                function r(a) {
                    if (a.target === this)
                        for (e.call(this, a), t = 0; t < i.length; t += 1) n.off(i[t], r)
                }
                if (e)
                    for (t = 0; t < i.length; t += 1) n.on(i[t], r);
                return this
            },
            outerWidth: function(e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            offset: function() {
                if (this.length > 0) {
                    var i = this[0],
                        n = i.getBoundingClientRect(),
                        r = e.body,
                        a = i.clientTop || r.clientTop || 0,
                        s = i.clientLeft || r.clientLeft || 0,
                        o = i === t ? t.scrollY : i.scrollTop,
                        l = i === t ? t.scrollX : i.scrollLeft;
                    return {
                        top: n.top + o - a,
                        left: n.left + l - s
                    }
                }
                return null
            },
            css: function(e, i) {
                var n;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (n = 0; n < this.length; n += 1)
                            for (var r in e) this[n].style[r] = e[r];
                        return this
                    }
                    if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (n = 0; n < this.length; n += 1) this[n].style[e] = i;
                    return this
                }
                return this
            },
            each: function(e) {
                if (!e) return this;
                for (var t = 0; t < this.length; t += 1)
                    if (!1 === e.call(this[t], t, this[t])) return this;
                return this
            },
            html: function(e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            },
            is: function(r) {
                var a, s, o = this[0];
                if (!o || void 0 === r) return !1;
                if ("string" == typeof r) {
                    if (o.matches) return o.matches(r);
                    if (o.webkitMatchesSelector) return o.webkitMatchesSelector(r);
                    if (o.msMatchesSelector) return o.msMatchesSelector(r);
                    for (a = n(r), s = 0; s < a.length; s += 1)
                        if (a[s] === o) return !0;
                    return !1
                }
                if (r === e) return o === e;
                if (r === t) return o === t;
                if (r.nodeType || r instanceof i) {
                    for (a = r.nodeType ? [r] : r, s = 0; s < a.length; s += 1)
                        if (a[s] === o) return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                var e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function(e) {
                if (void 0 === e) return this;
                var t, n = this.length;
                return new i(e > n - 1 ? [] : e < 0 ? (t = n + e) < 0 ? [] : [this[t]] : [this[e]])
            },
            append: function() {
                for (var t, n = [], r = arguments.length; r--;) n[r] = arguments[r];
                for (var a = 0; a < n.length; a += 1) {
                    t = n[a];
                    for (var s = 0; s < this.length; s += 1)
                        if ("string" == typeof t) {
                            var o = e.createElement("div");
                            for (o.innerHTML = t; o.firstChild;) this[s].appendChild(o.firstChild)
                        } else if (t instanceof i)
                        for (var l = 0; l < t.length; l += 1) this[s].appendChild(t[l]);
                    else this[s].appendChild(t)
                }
                return this
            },
            prepend: function(t) {
                var n, r;
                for (n = 0; n < this.length; n += 1)
                    if ("string" == typeof t) {
                        var a = e.createElement("div");
                        for (a.innerHTML = t, r = a.childNodes.length - 1; r >= 0; r -= 1) this[n].insertBefore(a.childNodes[r], this[n].childNodes[0])
                    } else if (t instanceof i)
                    for (r = 0; r < t.length; r += 1) this[n].insertBefore(t[r], this[n].childNodes[0]);
                else this[n].insertBefore(t, this[n].childNodes[0]);
                return this
            },
            next: function(e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
            },
            nextAll: function(e) {
                var t = [],
                    r = this[0];
                if (!r) return new i([]);
                for (; r.nextElementSibling;) {
                    var a = r.nextElementSibling;
                    e ? n(a).is(e) && t.push(a) : t.push(a), r = a
                }
                return new i(t)
            },
            prev: function(e) {
                if (this.length > 0) {
                    var t = this[0];
                    return e ? t.previousElementSibling && n(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
                }
                return new i([])
            },
            prevAll: function(e) {
                var t = [],
                    r = this[0];
                if (!r) return new i([]);
                for (; r.previousElementSibling;) {
                    var a = r.previousElementSibling;
                    e ? n(a).is(e) && t.push(a) : t.push(a), r = a
                }
                return new i(t)
            },
            parent: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? n(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return n(r(t))
            },
            parents: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var a = this[i].parentNode; a;) e ? n(a).is(e) && t.push(a) : t.push(a), a = a.parentNode;
                return n(r(t))
            },
            closest: function(e) {
                var t = this;
                return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            },
            find: function(e) {
                for (var t = [], n = 0; n < this.length; n += 1)
                    for (var r = this[n].querySelectorAll(e), a = 0; a < r.length; a += 1) t.push(r[a]);
                return new i(t)
            },
            children: function(e) {
                for (var t = [], a = 0; a < this.length; a += 1)
                    for (var s = this[a].childNodes, o = 0; o < s.length; o += 1) e ? 1 === s[o].nodeType && n(s[o]).is(e) && t.push(s[o]) : 1 === s[o].nodeType && t.push(s[o]);
                return new i(r(t))
            },
            remove: function() {
                for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                var i, r;
                for (i = 0; i < e.length; i += 1) {
                    var a = n(e[i]);
                    for (r = 0; r < a.length; r += 1) this[this.length] = a[r], this.length += 1
                }
                return this
            },
            styles: function() {
                return this[0] ? t.getComputedStyle(this[0], null) : {}
            }
        };
        Object.keys(a).forEach(function(e) {
            n.fn[e] = a[e]
        });
        var s, o, l, c = {
                deleteProps: function(e) {
                    var t = e;
                    Object.keys(t).forEach(function(e) {
                        try {
                            t[e] = null
                        } catch (e) {}
                        try {
                            delete t[e]
                        } catch (e) {}
                    })
                },
                nextTick: function(e, t) {
                    return void 0 === t && (t = 0), setTimeout(e, t)
                },
                now: function() {
                    return Date.now()
                },
                getTranslate: function(e, i) {
                    var n, r, a;
                    void 0 === i && (i = "x");
                    var s = t.getComputedStyle(e, null);
                    return t.WebKitCSSMatrix ? ((r = s.transform || s.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(function(e) {
                        return e.replace(",", ".")
                    }).join(", ")), a = new t.WebKitCSSMatrix("none" === r ? "" : r)) : n = (a = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (r = t.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === i && (r = t.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), r || 0
                },
                parseUrlQuery: function(e) {
                    var i, n, r, a, s = {},
                        o = e || t.location.href;
                    if ("string" == typeof o && o.length)
                        for (a = (n = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                                return "" !== e
                            })).length, i = 0; i < a; i += 1) r = n[i].replace(/#\S+/g, "").split("="), s[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "";
                    return s
                },
                isObject: function(e) {
                    return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
                },
                extend: function() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
                        var r = e[n];
                        if (null != r)
                            for (var a = Object.keys(Object(r)), s = 0, o = a.length; s < o; s += 1) {
                                var l = a[s],
                                    u = Object.getOwnPropertyDescriptor(r, l);
                                void 0 !== u && u.enumerable && (c.isObject(i[l]) && c.isObject(r[l]) ? c.extend(i[l], r[l]) : !c.isObject(i[l]) && c.isObject(r[l]) ? (i[l] = {}, c.extend(i[l], r[l])) : i[l] = r[l])
                            }
                    }
                    return i
                }
            },
            u = (l = e.createElement("div"), {
                touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
                pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
                prefixedPointerEvents: !!t.navigator.msPointerEnabled,
                transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o),
                transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (s = l.style, "webkitPerspective" in s || "MozPerspective" in s || "OPerspective" in s || "MsPerspective" in s || "perspective" in s),
                flexbox: function() {
                    for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                        if (t[i] in e) return !0;
                    return !1
                }(),
                observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
                passiveListener: function() {
                    var e = !1;
                    try {
                        var i = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        t.addEventListener("testPassiveListener", null, i)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart" in t
            }),
            d = function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                    t.on(e, t.params.on[e])
                })
            },
            h = {
                components: {
                    configurable: !0
                }
            };
        d.prototype.on = function(e, t) {
            var i = this;
            return "function" != typeof t ? i : (e.split(" ").forEach(function(e) {
                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e].push(t)
            }), i)
        }, d.prototype.once = function(e, t) {
            var i = this;
            if ("function" != typeof t) return i;
            return i.on(e, function n() {
                for (var r = [], a = arguments.length; a--;) r[a] = arguments[a];
                t.apply(i, r), i.off(e, n)
            })
        }, d.prototype.off = function(e, t) {
            var i = this;
            return e.split(" ").forEach(function(e) {
                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function(n, r) {
                    n === t && i.eventsListeners[e].splice(r, 1)
                })
            }), i
        }, d.prototype.emit = function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, n, r, a = this;
            return a.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), r = a) : (i = e[0].events, n = e[0].data, r = e[0].context || a), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
                if (a.eventsListeners[e]) {
                    var t = [];
                    a.eventsListeners[e].forEach(function(e) {
                        t.push(e)
                    }), t.forEach(function(e) {
                        e.apply(r, n)
                    })
                }
            }), a) : a
        }, d.prototype.useModulesParams = function(e) {
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function(i) {
                var n = t.modules[i];
                n.params && c.extend(e, n.params)
            })
        }, d.prototype.useModules = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function(i) {
                var n = t.modules[i],
                    r = e[i] || {};
                n.instance && Object.keys(n.instance).forEach(function(e) {
                    var i = n.instance[e];
                    t[e] = "function" == typeof i ? i.bind(t) : i
                }), n.on && t.on && Object.keys(n.on).forEach(function(e) {
                    t.on(e, n.on[e])
                }), n.create && n.create.bind(t)(r)
            })
        }, h.components.set = function(e) {
            this.use && this.use(e)
        }, d.installModule = function(e) {
            for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
            var n = this;
            n.prototype.modules || (n.prototype.modules = {});
            var r = e.name || Object.keys(n.prototype.modules).length + "_" + c.now();
            return n.prototype.modules[r] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
                n.prototype[t] = e.proto[t]
            }), e.static && Object.keys(e.static).forEach(function(t) {
                n[t] = e.static[t]
            }), e.install && e.install.apply(n, t), n
        }, d.use = function(e) {
            for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
            var n = this;
            return Array.isArray(e) ? (e.forEach(function(e) {
                return n.installModule(e)
            }), n) : n.installModule.apply(n, [e].concat(t))
        }, Object.defineProperties(d, h);
        var p = {
                updateSize: function() {
                    var e, t, i = this.$el;
                    e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), c.extend(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    var e = this,
                        t = e.params,
                        i = e.$wrapperEl,
                        n = e.size,
                        r = e.rtl,
                        a = e.wrongRTL,
                        s = i.children("." + e.params.slideClass),
                        o = e.virtual && t.virtual.enabled ? e.virtual.slides.length : s.length,
                        l = [],
                        d = [],
                        h = [],
                        p = t.slidesOffsetBefore;
                    "function" == typeof p && (p = t.slidesOffsetBefore.call(e));
                    var f = t.slidesOffsetAfter;
                    "function" == typeof f && (f = t.slidesOffsetAfter.call(e));
                    var m = o,
                        v = e.snapGrid.length,
                        g = e.snapGrid.length,
                        y = t.spaceBetween,
                        b = -p,
                        w = 0,
                        x = 0;
                    if (void 0 !== n) {
                        var E, T;
                        "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * n), e.virtualSize = -y, r ? s.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : s.css({
                            marginRight: "",
                            marginBottom: ""
                        }), t.slidesPerColumn > 1 && (E = Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (E = Math.max(E, t.slidesPerView * t.slidesPerColumn)));
                        for (var C, _ = t.slidesPerColumn, S = E / _, k = S - (t.slidesPerColumn * S - o), A = 0; A < o; A += 1) {
                            T = 0;
                            var D = s.eq(A);
                            if (t.slidesPerColumn > 1) {
                                var I = void 0,
                                    M = void 0,
                                    P = void 0;
                                "column" === t.slidesPerColumnFill ? (P = A - (M = Math.floor(A / _)) * _, (M > k || M === k && P === _ - 1) && (P += 1) >= _ && (P = 0, M += 1), I = M + P * E / _, D.css({
                                    "-webkit-box-ordinal-group": I,
                                    "-moz-box-ordinal-group": I,
                                    "-ms-flex-order": I,
                                    "-webkit-order": I,
                                    order: I
                                })) : M = A - (P = Math.floor(A / S)) * S, D.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== P && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", M).attr("data-swiper-row", P)
                            }
                            "none" !== D.css("display") && ("auto" === t.slidesPerView ? (T = e.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0), t.roundLengths && (T = Math.floor(T))) : (T = (n - (t.slidesPerView - 1) * y) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), s[A] && (e.isHorizontal() ? s[A].style.width = T + "px" : s[A].style.height = T + "px")), s[A] && (s[A].swiperSlideSize = T), h.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + y, 0 === w && 0 !== A && (b = b - n / 2 - y), 0 === A && (b = b - n / 2 - y), Math.abs(b) < .001 && (b = 0), x % t.slidesPerGroup == 0 && l.push(b), d.push(b)) : (x % t.slidesPerGroup == 0 && l.push(b), d.push(b), b = b + T + y), e.virtualSize += T + y, w = T, x += 1)
                        }
                        if (e.virtualSize = Math.max(e.virtualSize, n) + f, r && a && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
                                width: e.virtualSize + t.spaceBetween + "px"
                            }), u.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({
                                width: e.virtualSize + t.spaceBetween + "px"
                            }) : i.css({
                                height: e.virtualSize + t.spaceBetween + "px"
                            })), t.slidesPerColumn > 1 && (e.virtualSize = (T + t.spaceBetween) * E, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({
                                width: e.virtualSize + t.spaceBetween + "px"
                            }) : i.css({
                                height: e.virtualSize + t.spaceBetween + "px"
                            }), t.centeredSlides)) {
                            C = [];
                            for (var O = 0; O < l.length; O += 1) l[O] < e.virtualSize + l[0] && C.push(l[O]);
                            l = C
                        }
                        if (!t.centeredSlides) {
                            C = [];
                            for (var N = 0; N < l.length; N += 1) l[N] <= e.virtualSize - n && C.push(l[N]);
                            l = C, Math.floor(e.virtualSize - n) - Math.floor(l[l.length - 1]) > 1 && l.push(e.virtualSize - n)
                        }
                        0 === l.length && (l = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? s.css({
                            marginLeft: y + "px"
                        }) : s.css({
                            marginRight: y + "px"
                        }) : s.css({
                            marginBottom: y + "px"
                        })), c.extend(e, {
                            slides: s,
                            snapGrid: l,
                            slidesGrid: d,
                            slidesSizesGrid: h
                        }), o !== m && e.emit("slidesLengthChange"), l.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), d.length !== g && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function() {
                    var e, t = [],
                        i = 0;
                    if ("auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                        for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
                            var n = this.activeIndex + e;
                            if (n > this.slides.length) break;
                            t.push(this.slides.eq(n)[0])
                        } else t.push(this.slides.eq(this.activeIndex)[0]);
                    for (e = 0; e < t.length; e += 1)
                        if (void 0 !== t[e]) {
                            var r = t[e].offsetHeight;
                            i = r > i ? r : i
                        }
                    i && this.$wrapperEl.css("height", i + "px")
                },
                updateSlidesOffset: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this.translate || 0);
                    var t = this.params,
                        i = this.slides,
                        n = this.rtl;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                        var r = -e;
                        n && (r = e), i.removeClass(t.slideVisibleClass);
                        for (var a = 0; a < i.length; a += 1) {
                            var s = i[a],
                                o = (r + (t.centeredSlides ? this.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + t.spaceBetween);
                            if (t.watchSlidesVisibility) {
                                var l = -(r - s.swiperSlideOffset),
                                    c = l + this.slidesSizesGrid[a];
                                (l >= 0 && l < this.size || c > 0 && c <= this.size || l <= 0 && c >= this.size) && i.eq(a).addClass(t.slideVisibleClass)
                            }
                            s.progress = n ? -o : o
                        }
                    }
                },
                updateProgress: function(e) {
                    void 0 === e && (e = this.translate || 0);
                    var t = this,
                        i = t.params,
                        n = t.maxTranslate() - t.minTranslate(),
                        r = t.progress,
                        a = t.isBeginning,
                        s = t.isEnd,
                        o = a,
                        l = s;
                    0 === n ? (r = 0, a = !0, s = !0) : (a = (r = (e - t.minTranslate()) / n) <= 0, s = r >= 1), c.extend(t, {
                        progress: r,
                        isBeginning: a,
                        isEnd: s
                    }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), s && !l && t.emit("reachEnd toEdge"), (o && !a || l && !s) && t.emit("fromEdge"), t.emit("progress", r)
                },
                updateSlidesClasses: function() {
                    var e, t = this.slides,
                        i = this.params,
                        n = this.$wrapperEl,
                        r = this.activeIndex,
                        a = this.realIndex,
                        s = this.virtual && i.virtual.enabled;
                    t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = s ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass));
                    var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
                    var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(e) {
                    var t, i = this,
                        n = i.rtl ? i.translate : -i.translate,
                        r = i.slidesGrid,
                        a = i.snapGrid,
                        s = i.params,
                        o = i.activeIndex,
                        l = i.realIndex,
                        u = i.snapIndex,
                        d = e;
                    if (void 0 === d) {
                        for (var h = 0; h < r.length; h += 1) void 0 !== r[h + 1] ? n >= r[h] && n < r[h + 1] - (r[h + 1] - r[h]) / 2 ? d = h : n >= r[h] && n < r[h + 1] && (d = h + 1) : n >= r[h] && (d = h);
                        s.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                    }
                    if ((t = a.indexOf(n) >= 0 ? a.indexOf(n) : Math.floor(d / s.slidesPerGroup)) >= a.length && (t = a.length - 1), d !== o) {
                        var p = parseInt(i.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                        c.extend(i, {
                            snapIndex: t,
                            realIndex: p,
                            previousIndex: o,
                            activeIndex: d
                        }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== p && i.emit("realIndexChange"), i.emit("slideChange")
                    } else t !== u && (i.snapIndex = t, i.emit("snapIndexChange"))
                },
                updateClickedSlide: function(e) {
                    var t = this,
                        i = t.params,
                        r = n(e.target).closest("." + i.slideClass)[0],
                        a = !1;
                    if (r)
                        for (var s = 0; s < t.slides.length; s += 1) t.slides[s] === r && (a = !0);
                    if (!r || !a) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n(r).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            },
            f = {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        i = this.rtl,
                        n = this.translate,
                        r = this.$wrapperEl;
                    if (t.virtualTranslate) return i ? -n : n;
                    var a = c.getTranslate(r[0], e);
                    return i && (a = -a), a || 0
                },
                setTranslate: function(e, t) {
                    var i = this,
                        n = i.rtl,
                        r = i.params,
                        a = i.$wrapperEl,
                        s = i.progress,
                        o = 0,
                        l = 0;
                    i.isHorizontal() ? o = n ? -e : e : l = e, r.roundLengths && (o = Math.floor(o), l = Math.floor(l)), r.virtualTranslate || (u.transforms3d ? a.transform("translate3d(" + o + "px, " + l + "px, 0px)") : a.transform("translate(" + o + "px, " + l + "px)")), i.translate = i.isHorizontal() ? o : l;
                    var c = i.maxTranslate() - i.minTranslate();
                    (0 === c ? 0 : (e - i.minTranslate()) / c) !== s && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }
            },
            m = {
                setTransition: function(e, t) {
                    this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    var i = this.activeIndex,
                        n = this.params,
                        r = this.previousIndex;
                    n.autoHeight && this.updateAutoHeight();
                    var a = t;
                    if (a || (a = i > r ? "next" : i < r ? "prev" : "reset"), this.emit("transitionStart"), e && i !== r) {
                        if ("reset" === a) return void this.emit("slideResetTransitionStart");
                        this.emit("slideChangeTransitionStart"), "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                    }
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    var i = this.activeIndex,
                        n = this.previousIndex;
                    this.animating = !1, this.setTransition(0);
                    var r = t;
                    if (r || (r = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== n) {
                        if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                        this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                    }
                }
            },
            v = {
                slideTo: function(e, t, i, n) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var r = this,
                        a = e;
                    a < 0 && (a = 0);
                    var s = r.params,
                        o = r.snapGrid,
                        l = r.slidesGrid,
                        c = r.previousIndex,
                        d = r.activeIndex,
                        h = r.rtl,
                        p = r.$wrapperEl;
                    if (r.animating && s.preventIntercationOnTransition) return !1;
                    var f = Math.floor(a / s.slidesPerGroup);
                    f >= o.length && (f = o.length - 1), (d || s.initialSlide || 0) === (c || 0) && i && r.emit("beforeSlideChangeStart");
                    var m, v = -o[f];
                    if (r.updateProgress(v), s.normalizeSlideIndex)
                        for (var g = 0; g < l.length; g += 1) - Math.floor(100 * v) >= Math.floor(100 * l[g]) && (a = g);
                    if (r.initialized && a !== d) {
                        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                        if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (d || 0) !== a) return !1
                    }
                    return m = a > d ? "next" : a < d ? "prev" : "reset", h && -v === r.translate || !h && v === r.translate ? (r.updateActiveIndex(a), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(v), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1) : (0 !== t && u.transition ? (r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, m), r.animating || (r.animating = !0, p.transitionEnd(function() {
                        r && !r.destroyed && r.transitionEnd(i, m)
                    }))) : (r.setTransition(0), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, m), r.transitionEnd(i, m)), !0)
                },
                slideToLoop: function(e, t, i, n) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var r = e;
                    return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, i, n)
                },
                slideNext: function(e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var n = this.params,
                        r = this.animating;
                    return n.loop ? !r && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)
                },
                slidePrev: function(e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var n = this.params,
                        r = this.animating;
                    return n.loop ? !r && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex - 1, e, t, i)) : this.slideTo(this.activeIndex - 1, e, t, i)
                },
                slideReset: function(e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    return this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClickedSlide: function() {
                    var e, t = this,
                        i = t.params,
                        r = t.$wrapperEl,
                        a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                        s = t.clickedIndex;
                    if (i.loop) {
                        if (t.animating) return;
                        e = parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? s < t.loopedSlides - a / 2 || s > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), c.nextTick(function() {
                            t.slideTo(s)
                        })) : t.slideTo(s) : s > t.slides.length - a ? (t.loopFix(), s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), c.nextTick(function() {
                            t.slideTo(s)
                        })) : t.slideTo(s)
                    } else t.slideTo(s)
                }
            },
            g = {
                loopCreate: function() {
                    var t = this,
                        i = t.params,
                        r = t.$wrapperEl;
                    r.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                    var a = r.children("." + i.slideClass);
                    if (i.loopFillGroupWithBlank) {
                        var s = i.slidesPerGroup - a.length % i.slidesPerGroup;
                        if (s !== i.slidesPerGroup) {
                            for (var o = 0; o < s; o += 1) {
                                var l = n(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                r.append(l)
                            }
                            a = r.children("." + i.slideClass)
                        }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > a.length && (t.loopedSlides = a.length);
                    var c = [],
                        u = [];
                    a.each(function(e, i) {
                        var r = n(i);
                        e < t.loopedSlides && u.push(i), e < a.length && e >= a.length - t.loopedSlides && c.push(i), r.attr("data-swiper-slide-index", e)
                    });
                    for (var d = 0; d < u.length; d += 1) r.append(n(u[d].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (var h = c.length - 1; h >= 0; h -= 1) r.prepend(n(c[h].cloneNode(!0)).addClass(i.slideDuplicateClass))
                },
                loopFix: function() {
                    var e, t = this,
                        i = t.params,
                        n = t.activeIndex,
                        r = t.slides,
                        a = t.loopedSlides,
                        s = t.allowSlidePrev,
                        o = t.allowSlideNext,
                        l = t.snapGrid,
                        c = t.rtl;
                    t.allowSlidePrev = !0, t.allowSlideNext = !0;
                    var u = -l[n] - t.getTranslate();
                    n < a ? (e = r.length - 3 * a + n, e += a, t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((c ? -t.translate : t.translate) - u)) : ("auto" === i.slidesPerView && n >= 2 * a || n > r.length - 2 * i.slidesPerView) && (e = -r.length + n + a, e += a, t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((c ? -t.translate : t.translate) - u));
                    t.allowSlidePrev = s, t.allowSlideNext = o
                },
                loopDestroy: function() {
                    var e = this.$wrapperEl,
                        t = this.params,
                        i = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
                }
            },
            y = {
                setGrabCursor: function(e) {
                    if (!u.touch && this.params.simulateTouch) {
                        var t = this.el;
                        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function() {
                    u.touch || (this.el.style.cursor = "")
                }
            },
            b = {
                appendSlide: function(e) {
                    var t = this.$wrapperEl,
                        i = this.params;
                    if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                        for (var n = 0; n < e.length; n += 1) e[n] && t.append(e[n]);
                    else t.append(e);
                    i.loop && this.loopCreate(), i.observer && u.observer || this.update()
                },
                prependSlide: function(e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        n = this.activeIndex;
                    t.loop && this.loopDestroy();
                    var r = n + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
                        r = n + e.length
                    } else i.prepend(e);
                    t.loop && this.loopCreate(), t.observer && u.observer || this.update(), this.slideTo(r, 0, !1)
                },
                removeSlide: function(e) {
                    var t = this,
                        i = t.params,
                        n = t.$wrapperEl,
                        r = t.activeIndex;
                    i.loop && (t.loopDestroy(), t.slides = n.children("." + i.slideClass));
                    var a, s = r;
                    if ("object" == typeof e && "length" in e) {
                        for (var o = 0; o < e.length; o += 1) a = e[o], t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1);
                        s = Math.max(s, 0)
                    } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1), s = Math.max(s, 0);
                    i.loop && t.loopCreate(), i.observer && u.observer || t.update(), i.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
                },
                removeAllSlides: function() {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e)
                }
            },
            w = function() {
                var i = t.navigator.userAgent,
                    n = {
                        ios: !1,
                        android: !1,
                        androidChrome: !1,
                        desktop: !1,
                        windows: !1,
                        iphone: !1,
                        ipod: !1,
                        ipad: !1,
                        cordova: t.cordova || t.phonegap,
                        phonegap: t.cordova || t.phonegap
                    },
                    r = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    a = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                    s = i.match(/(iPad).*OS\s([\d_]+)/),
                    o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                    l = !s && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (r && (n.os = "windows", n.osVersion = r[2], n.windows = !0), a && !r && (n.os = "android", n.osVersion = a[2], n.android = !0, n.androidChrome = i.toLowerCase().indexOf("chrome") >= 0), (s || l || o) && (n.os = "ios", n.ios = !0), l && !o && (n.osVersion = l[2].replace(/_/g, "."), n.iphone = !0), s && (n.osVersion = s[2].replace(/_/g, "."), n.ipad = !0), o && (n.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, n.iphone = !0), n.ios && n.osVersion && i.indexOf("Version/") >= 0 && "10" === n.osVersion.split(".")[0] && (n.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), n.desktop = !(n.os || n.android || n.webView), n.webView = (l || s || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), n.os && "ios" === n.os) {
                    var c = n.osVersion.split("."),
                        u = e.querySelector('meta[name="viewport"]');
                    n.minimalUi = !n.webView && (o || l) && (1 * c[0] == 7 ? 1 * c[1] >= 1 : 1 * c[0] > 7) && u && u.getAttribute("content").indexOf("minimal-ui") >= 0
                }
                return n.pixelRatio = t.devicePixelRatio || 1, n
            }(),
            x = function(i) {
                var r = this,
                    a = r.touchEventsData,
                    s = r.params,
                    o = r.touches;
                if (!r.animating || !s.preventIntercationOnTransition) {
                    var l = i;
                    if (l.originalEvent && (l = l.originalEvent), a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && (!a.isTouched || !a.isMoved))
                        if (s.noSwiping && n(l.target).closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) r.allowClick = !0;
                        else if (!s.swipeHandler || n(l).closest(s.swipeHandler)[0]) {
                        o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                        var u = o.currentX,
                            d = o.currentY;
                        if (!(w.ios && !w.cordova && s.iOSEdgeSwipeDetection && u <= s.iOSEdgeSwipeThreshold && u >= t.screen.width - s.iOSEdgeSwipeThreshold)) {
                            if (c.extend(a, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), o.startX = u, o.startY = d, a.touchStartTime = c.now(), r.allowClick = !0, r.updateSize(), r.swipeDirection = void 0, s.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
                                var h = !0;
                                n(l.target).is(a.formElements) && (h = !1), e.activeElement && n(e.activeElement).is(a.formElements) && e.activeElement !== l.target && e.activeElement.blur(), h && r.allowTouchMove && l.preventDefault()
                            }
                            r.emit("touchStart", l)
                        }
                    }
                }
            },
            E = function(t) {
                var i = this,
                    r = i.touchEventsData,
                    a = i.params,
                    s = i.touches,
                    o = i.rtl,
                    l = t;
                if (l.originalEvent && (l = l.originalEvent), r.isTouched) {
                    if (!r.isTouchEvent || "mousemove" !== l.type) {
                        var u = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX,
                            d = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
                        if (l.preventedByNestedSwiper) return s.startX = u, void(s.startY = d);
                        if (!i.allowTouchMove) return i.allowClick = !1, void(r.isTouched && (c.extend(s, {
                            startX: u,
                            startY: d,
                            currentX: u,
                            currentY: d
                        }), r.touchStartTime = c.now()));
                        if (r.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                            if (i.isVertical()) {
                                if (d < s.startY && i.translate <= i.maxTranslate() || d > s.startY && i.translate >= i.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
                            } else if (u < s.startX && i.translate <= i.maxTranslate() || u > s.startX && i.translate >= i.minTranslate()) return;
                        if (r.isTouchEvent && e.activeElement && l.target === e.activeElement && n(l.target).is(r.formElements)) return r.isMoved = !0, void(i.allowClick = !1);
                        if (r.allowTouchCallbacks && i.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                            s.currentX = u, s.currentY = d;
                            var h, p = s.currentX - s.startX,
                                f = s.currentY - s.startY;
                            if (void 0 === r.isScrolling) i.isHorizontal() && s.currentY === s.startY || i.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : p * p + f * f >= 25 && (h = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, r.isScrolling = i.isHorizontal() ? h > a.touchAngle : 90 - h > a.touchAngle);
                            if (r.isScrolling && i.emit("touchMoveOpposite", l), "undefined" == typeof startMoving && (s.currentX === s.startX && s.currentY === s.startY || (r.startMoving = !0)), r.isScrolling) r.isTouched = !1;
                            else if (r.startMoving) {
                                i.allowClick = !1, l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), r.isMoved || (a.loop && i.loopFix(), r.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !a.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", l)), i.emit("sliderMove", l), r.isMoved = !0;
                                var m = i.isHorizontal() ? p : f;
                                s.diff = m, m *= a.touchRatio, o && (m = -m), i.swipeDirection = m > 0 ? "prev" : "next", r.currentTranslate = m + r.startTranslate;
                                var v = !0,
                                    g = a.resistanceRatio;
                                if (a.touchReleaseOnEdges && (g = 0), m > 0 && r.currentTranslate > i.minTranslate() ? (v = !1, a.resistance && (r.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + r.startTranslate + m, g))) : m < 0 && r.currentTranslate < i.maxTranslate() && (v = !1, a.resistance && (r.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - r.startTranslate - m, g))), v && (l.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), a.threshold > 0) {
                                    if (!(Math.abs(m) > a.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
                                    if (!r.allowThresholdMove) return r.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, r.currentTranslate = r.startTranslate, void(s.diff = i.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                }
                                a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), a.freeMode && (0 === r.velocities.length && r.velocities.push({
                                    position: s[i.isHorizontal() ? "startX" : "startY"],
                                    time: r.touchStartTime
                                }), r.velocities.push({
                                    position: s[i.isHorizontal() ? "currentX" : "currentY"],
                                    time: c.now()
                                })), i.updateProgress(r.currentTranslate), i.setTranslate(r.currentTranslate))
                            }
                        }
                    }
                } else r.startMoving && r.isScrolling && i.emit("touchMoveOpposite", l)
            },
            T = function(e) {
                var t = this,
                    i = t.touchEventsData,
                    n = t.params,
                    r = t.touches,
                    a = t.rtl,
                    s = t.$wrapperEl,
                    o = t.slidesGrid,
                    l = t.snapGrid,
                    u = e;
                if (u.originalEvent && (u = u.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", u), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var d, h = c.now(),
                    p = h - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(u), t.emit("tap", u), p < 300 && h - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = c.nextTick(function() {
                        t && !t.destroyed && t.emit("click", u)
                    }, 300)), p < 300 && h - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", u))), i.lastClickTime = c.now(), c.nextTick(function() {
                        t.destroyed || (t.allowClick = !0)
                    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, d = n.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
                    if (d < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (d > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (n.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var f = i.velocities.pop(),
                                m = i.velocities.pop(),
                                v = f.position - m.position,
                                g = f.time - m.time;
                            t.velocity = v / g, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || c.now() - f.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var y = 1e3 * n.freeModeMomentumRatio,
                            b = t.velocity * y,
                            w = t.translate + b;
                        a && (w = -w);
                        var x, E = !1,
                            T = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                        if (w < t.maxTranslate()) n.freeModeMomentumBounce ? (w + t.maxTranslate() < -T && (w = t.maxTranslate() - T), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate();
                        else if (w > t.minTranslate()) n.freeModeMomentumBounce ? (w - t.minTranslate() > T && (w = t.minTranslate() + T), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : w = t.minTranslate();
                        else if (n.freeModeSticky) {
                            for (var C, _ = 0; _ < l.length; _ += 1)
                                if (l[_] > -w) {
                                    C = _;
                                    break
                                }
                            w = -(w = Math.abs(l[C] - w) < Math.abs(l[C - 1] - w) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                        }
                        if (0 !== t.velocity) y = a ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                        else if (n.freeModeSticky) return void t.slideReset();
                        n.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd(function() {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(x), s.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(w), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                    }(!n.freeModeMomentum || p >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var S = 0, k = t.slidesSizesGrid[0], A = 0; A < o.length; A += n.slidesPerGroup) void 0 !== o[A + n.slidesPerGroup] ? d >= o[A] && d < o[A + n.slidesPerGroup] && (S = A, k = o[A + n.slidesPerGroup] - o[A]) : d >= o[A] && (S = A, k = o[o.length - 1] - o[o.length - 2]);
                    var D = (d - o[S]) / k;
                    if (p > n.longSwipesMs) {
                        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (D >= n.longSwipesRatio ? t.slideTo(S + n.slidesPerGroup) : t.slideTo(S)), "prev" === t.swipeDirection && (D > 1 - n.longSwipesRatio ? t.slideTo(S + n.slidesPerGroup) : t.slideTo(S))
                    } else {
                        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(S + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(S)
                    }
                }
            },
            C = function() {
                var e = this,
                    t = e.params,
                    i = e.el;
                if (!i || 0 !== i.offsetWidth) {
                    t.breakpoints && e.setBreakpoint();
                    var n = e.allowSlideNext,
                        r = e.allowSlidePrev;
                    if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                        var a = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
                    } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                    e.allowSlidePrev = r, e.allowSlideNext = n
                }
            },
            _ = function(e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            };
        var S = {
                attachEvents: function() {
                    var t = this,
                        i = t.params,
                        n = t.touchEvents,
                        r = t.el,
                        a = t.wrapperEl;
                    t.onTouchStart = x.bind(t), t.onTouchMove = E.bind(t), t.onTouchEnd = T.bind(t), t.onClick = _.bind(t);
                    var s = "container" === i.touchEventsTarget ? r : a,
                        o = !!i.nested;
                    if (u.touch || !u.pointerEvents && !u.prefixedPointerEvents) {
                        if (u.touch) {
                            var l = !("touchstart" !== n.start || !u.passiveListener || !i.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.addEventListener(n.start, t.onTouchStart, l), s.addEventListener(n.move, t.onTouchMove, u.passiveListener ? {
                                passive: !1,
                                capture: o
                            } : o), s.addEventListener(n.end, t.onTouchEnd, l)
                        }(i.simulateTouch && !w.ios && !w.android || i.simulateTouch && !u.touch && w.ios) && (s.addEventListener("mousedown", t.onTouchStart, !1), e.addEventListener("mousemove", t.onTouchMove, o), e.addEventListener("mouseup", t.onTouchEnd, !1))
                    } else s.addEventListener(n.start, t.onTouchStart, !1), e.addEventListener(n.move, t.onTouchMove, o), e.addEventListener(n.end, t.onTouchEnd, !1);
                    (i.preventClicks || i.preventClicksPropagation) && s.addEventListener("click", t.onClick, !0), t.on("resize observerUpdate", C)
                },
                detachEvents: function() {
                    var t = this,
                        i = t.params,
                        n = t.touchEvents,
                        r = t.el,
                        a = t.wrapperEl,
                        s = "container" === i.touchEventsTarget ? r : a,
                        o = !!i.nested;
                    if (u.touch || !u.pointerEvents && !u.prefixedPointerEvents) {
                        if (u.touch) {
                            var l = !("onTouchStart" !== n.start || !u.passiveListener || !i.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.removeEventListener(n.start, t.onTouchStart, l), s.removeEventListener(n.move, t.onTouchMove, o), s.removeEventListener(n.end, t.onTouchEnd, l)
                        }(i.simulateTouch && !w.ios && !w.android || i.simulateTouch && !u.touch && w.ios) && (s.removeEventListener("mousedown", t.onTouchStart, !1), e.removeEventListener("mousemove", t.onTouchMove, o), e.removeEventListener("mouseup", t.onTouchEnd, !1))
                    } else s.removeEventListener(n.start, t.onTouchStart, !1), e.removeEventListener(n.move, t.onTouchMove, o), e.removeEventListener(n.end, t.onTouchEnd, !1);
                    (i.preventClicks || i.preventClicksPropagation) && s.removeEventListener("click", t.onClick, !0), t.off("resize observerUpdate", C)
                }
            },
            k = {
                setBreakpoint: function() {
                    var e = this,
                        t = e.activeIndex,
                        i = e.loopedSlides;
                    void 0 === i && (i = 0);
                    var n = e.params,
                        r = n.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var a = e.getBreakpoint(r);
                        if (a && e.currentBreakpoint !== a) {
                            var s = a in r ? r[a] : e.originalParams,
                                o = n.loop && s.slidesPerView !== n.slidesPerView;
                            c.extend(e.params, s), c.extend(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), e.currentBreakpoint = a, o && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", s)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var i = !1,
                            n = [];
                        Object.keys(e).forEach(function(e) {
                            n.push(e)
                        }), n.sort(function(e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        });
                        for (var r = 0; r < n.length; r += 1) {
                            var a = n[r];
                            a >= t.innerWidth && !i && (i = a)
                        }
                        return i || "max"
                    }
                }
            },
            A = function() {
                return {
                    isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
                    isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
                };
                var e
            }();
        var D = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                preventIntercationOnTransition: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            },
            I = {
                update: p,
                translate: f,
                transition: m,
                slide: v,
                loop: g,
                grabCursor: y,
                manipulation: b,
                events: S,
                breakpoints: k,
                checkOverflow: {
                    checkOverflow: function() {
                        var e = this.isLocked;
                        this.isLocked = 1 === this.snapGrid.length, this.allowTouchMove = !this.isLocked, e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                    }
                },
                classes: {
                    addClasses: function() {
                        var e = this.classNames,
                            t = this.params,
                            i = this.rtl,
                            n = this.$el,
                            r = [];
                        r.push(t.direction), t.freeMode && r.push("free-mode"), u.flexbox || r.push("no-flexbox"), t.autoHeight && r.push("autoheight"), i && r.push("rtl"), t.slidesPerColumn > 1 && r.push("multirow"), w.android && r.push("android"), w.ios && r.push("ios"), A.isIE && (u.pointerEvents || u.prefixedPointerEvents) && r.push("wp8-" + t.direction), r.forEach(function(i) {
                            e.push(t.containerModifierClass + i)
                        }), n.addClass(e.join(" "))
                    },
                    removeClasses: function() {
                        var e = this.$el,
                            t = this.classNames;
                        e.removeClass(t.join(" "))
                    }
                },
                images: {
                    loadImage: function(e, i, n, r, a, s) {
                        var o;

                        function l() {
                            s && s()
                        }
                        e.complete && a ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, r && (o.sizes = r), n && (o.srcset = n), i && (o.src = i)) : l()
                    },
                    preloadImages: function() {
                        var e = this;

                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                            var n = e.imagesToLoad[i];
                            e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                        }
                    }
                }
            },
            M = {},
            P = function(e) {
                function t() {
                    for (var i, r, a, s = [], o = arguments.length; o--;) s[o] = arguments[o];
                    1 === s.length && s[0].constructor && s[0].constructor === Object ? r = s[0] : (i = (a = s)[0], r = a[1]);
                    r || (r = {}), r = c.extend({}, r), i && !r.el && (r.el = i), e.call(this, r), Object.keys(I).forEach(function(e) {
                        Object.keys(I[e]).forEach(function(i) {
                            t.prototype[i] || (t.prototype[i] = I[e][i])
                        })
                    });
                    var l = this;
                    void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
                        var t = l.modules[e];
                        if (t.params) {
                            var i = Object.keys(t.params)[0],
                                n = t.params[i];
                            if ("object" != typeof n) return;
                            if (!(i in r && "enabled" in n)) return;
                            !0 === r[i] && (r[i] = {
                                enabled: !0
                            }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
                                enabled: !1
                            })
                        }
                    });
                    var d = c.extend({}, D);
                    l.useModulesParams(d), l.params = c.extend({}, d, M, r), l.originalParams = c.extend({}, l.params), l.passedParams = c.extend({}, r), l.$ = n;
                    var h = n(l.params.el);
                    if (i = h[0]) {
                        if (h.length > 1) {
                            var p = [];
                            return h.each(function(e, i) {
                                var n = c.extend({}, r, {
                                    el: i
                                });
                                p.push(new t(n))
                            }), p
                        }
                        i.swiper = l, h.data("swiper", l);
                        var f, m, v = h.children("." + l.params.wrapperClass);
                        return c.extend(l, {
                            $el: h,
                            el: i,
                            $wrapperEl: v,
                            wrapperEl: v[0],
                            classNames: [],
                            slides: n(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === l.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === l.params.direction
                            },
                            rtl: "horizontal" === l.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === h.css("direction")),
                            wrongRTL: "-webkit-box" === v.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: l.params.allowSlideNext,
                            allowSlidePrev: l.params.allowSlidePrev,
                            touchEvents: (f = ["touchstart", "touchmove", "touchend"], m = ["mousedown", "mousemove", "mouseup"], u.pointerEvents ? m = ["pointerdown", "pointermove", "pointerup"] : u.prefixedPointerEvents && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                                start: f[0],
                                move: f[1],
                                end: f[2]
                            }, l.touchEventsDesktop = {
                                start: m[0],
                                move: m[1],
                                end: m[2]
                            }, u.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: c.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: l.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), l.useModules(), l.params.init && l.init(), l
                    }
                }
                e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
                var i = {
                    extendedDefaults: {
                        configurable: !0
                    },
                    defaults: {
                        configurable: !0
                    },
                    Class: {
                        configurable: !0
                    },
                    $: {
                        configurable: !0
                    }
                };
                return t.prototype.slidesPerViewDynamic = function() {
                    var e = this.params,
                        t = this.slides,
                        i = this.slidesGrid,
                        n = this.size,
                        r = this.activeIndex,
                        a = 1;
                    if (e.centeredSlides) {
                        for (var s, o = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1) t[l] && !s && (a += 1, (o += t[l].swiperSlideSize) > n && (s = !0));
                        for (var c = r - 1; c >= 0; c -= 1) t[c] && !s && (a += 1, (o += t[c].swiperSlideSize) > n && (s = !0))
                    } else
                        for (var u = r + 1; u < t.length; u += 1) i[u] - i[r] < n && (a += 1);
                    return a
                }, t.prototype.update = function() {
                    var e = this;
                    e && !e.destroyed && (e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (t(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || t(), e.emit("update"));

                    function t() {
                        var t = e.rtl ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                }, t.prototype.init = function() {
                    var e = this;
                    e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
                }, t.prototype.destroy = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var i = this,
                        n = i.params,
                        r = i.$el,
                        a = i.$wrapperEl,
                        s = i.slides;
                    i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), s && s.length && s.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                        i.off(e)
                    }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), c.deleteProps(i)), i.destroyed = !0
                }, t.extendDefaults = function(e) {
                    c.extend(M, e)
                }, i.extendedDefaults.get = function() {
                    return M
                }, i.defaults.get = function() {
                    return D
                }, i.Class.get = function() {
                    return e
                }, i.$.get = function() {
                    return n
                }, Object.defineProperties(t, i), t
            }(d),
            O = {
                name: "device",
                proto: {
                    device: w
                },
                static: {
                    device: w
                }
            },
            N = {
                name: "support",
                proto: {
                    support: u
                },
                static: {
                    support: u
                }
            },
            L = {
                name: "browser",
                proto: {
                    browser: A
                },
                static: {
                    browser: A
                }
            },
            z = {
                name: "resize",
                create: function() {
                    var e = this;
                    c.extend(e, {
                        resize: {
                            resizeHandler: function() {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                            },
                            orientationChangeHandler: function() {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                    },
                    destroy: function() {
                        t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                    }
                }
            },
            j = {
                func: t.MutationObserver || t.WebkitMutationObserver,
                attach: function(e, t) {
                    void 0 === t && (t = {});
                    var i = this,
                        n = new(0, j.func)(function(e) {
                            e.forEach(function(e) {
                                i.emit("observerUpdate", e)
                            })
                        });
                    n.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), i.observer.observers.push(n)
                },
                init: function() {
                    if (u.observer && this.params.observer) {
                        if (this.params.observeParents)
                            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                        this.observer.attach(this.$el[0], {
                            childList: !1
                        }), this.observer.attach(this.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function() {
                    this.observer.observers.forEach(function(e) {
                        e.disconnect()
                    }), this.observer.observers = []
                }
            },
            H = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1
                },
                create: function() {
                    c.extend(this, {
                        observer: {
                            init: j.init.bind(this),
                            attach: j.attach.bind(this),
                            destroy: j.destroy.bind(this),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function() {
                        this.observer.init()
                    },
                    destroy: function() {
                        this.observer.destroy()
                    }
                }
            },
            R = {
                update: function(e) {
                    var t = this,
                        i = t.params,
                        n = i.slidesPerView,
                        r = i.slidesPerGroup,
                        a = i.centeredSlides,
                        s = t.virtual,
                        o = s.from,
                        l = s.to,
                        u = s.slides,
                        d = s.slidesGrid,
                        h = s.renderSlide,
                        p = s.offset;
                    t.updateActiveIndex();
                    var f, m, v, g = t.activeIndex || 0;
                    f = t.rtl && t.isHorizontal() ? "right" : t.isHorizontal() ? "left" : "top", a ? (m = Math.floor(n / 2) + r, v = Math.floor(n / 2) + r) : (m = n + (r - 1), v = r);
                    var y = Math.max((g || 0) - v, 0),
                        b = Math.min((g || 0) + m, u.length - 1),
                        w = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

                    function x() {
                        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                    }
                    if (c.extend(t.virtual, {
                            from: y,
                            to: b,
                            offset: w,
                            slidesGrid: t.slidesGrid
                        }), o === y && l === b && !e) return t.slidesGrid !== d && w !== p && t.slides.css(f, w + "px"), void t.updateProgress();
                    if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                        offset: w,
                        from: y,
                        to: b,
                        slides: function() {
                            for (var e = [], t = y; t <= b; t += 1) e.push(u[t]);
                            return e
                        }()
                    }), void x();
                    var E = [],
                        T = [];
                    if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                    else
                        for (var C = o; C <= l; C += 1)(C < y || C > b) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + C + '"]').remove();
                    for (var _ = 0; _ < u.length; _ += 1) _ >= y && _ <= b && (void 0 === l || e ? T.push(_) : (_ > l && T.push(_), _ < o && E.push(_)));
                    T.forEach(function(e) {
                        t.$wrapperEl.append(h(u[e], e))
                    }), E.sort(function(e, t) {
                        return e < t
                    }).forEach(function(e) {
                        t.$wrapperEl.prepend(h(u[e], e))
                    }), t.$wrapperEl.children(".swiper-slide").css(f, w + "px"), x()
                },
                renderSlide: function(e, t) {
                    var i = this.params.virtual;
                    if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                    var r = i.renderSlide ? n(i.renderSlide.call(this, e, t)) : n('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                    return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = r), r
                },
                appendSlide: function(e) {
                    this.virtual.slides.push(e), this.virtual.update(!0)
                },
                prependSlide: function(e) {
                    if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
                        var t = this.virtual.cache,
                            i = {};
                        Object.keys(t).forEach(function(e) {
                            i[e + 1] = t[e]
                        }), this.virtual.cache = i
                    }
                    this.virtual.update(!0), this.slideNext(0)
                }
            },
            $ = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null
                    }
                },
                create: function() {
                    c.extend(this, {
                        virtual: {
                            update: R.update.bind(this),
                            appendSlide: R.appendSlide.bind(this),
                            prependSlide: R.prependSlide.bind(this),
                            renderSlide: R.renderSlide.bind(this),
                            slides: this.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if (this.params.virtual.enabled) {
                            this.classNames.push(this.params.containerModifierClass + "virtual");
                            var e = {
                                watchSlidesProgress: !0
                            };
                            c.extend(this.params, e), c.extend(this.originalParams, e), this.virtual.update()
                        }
                    },
                    setTranslate: function() {
                        this.params.virtual.enabled && this.virtual.update()
                    }
                }
            },
            q = {
                handle: function(i) {
                    var n = this,
                        r = i;
                    r.originalEvent && (r = r.originalEvent);
                    var a = r.keyCode || r.charCode;
                    if (!n.allowSlideNext && (n.isHorizontal() && 39 === a || n.isVertical() && 40 === a)) return !1;
                    if (!n.allowSlidePrev && (n.isHorizontal() && 37 === a || n.isVertical() && 38 === a)) return !1;
                    if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                        if (n.params.keyboard.onlyInViewport && (37 === a || 39 === a || 38 === a || 40 === a)) {
                            var s = !1;
                            if (n.$el.parents("." + n.params.slideClass).length > 0 && 0 === n.$el.parents("." + n.params.slideActiveClass).length) return;
                            var o = t.innerWidth,
                                l = t.innerHeight,
                                c = n.$el.offset();
                            n.rtl && (c.left -= n.$el[0].scrollLeft);
                            for (var u = [
                                    [c.left, c.top],
                                    [c.left + n.width, c.top],
                                    [c.left, c.top + n.height],
                                    [c.left + n.width, c.top + n.height]
                                ], d = 0; d < u.length; d += 1) {
                                var h = u[d];
                                h[0] >= 0 && h[0] <= o && h[1] >= 0 && h[1] <= l && (s = !0)
                            }
                            if (!s) return
                        }
                        n.isHorizontal() ? (37 !== a && 39 !== a || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (39 === a && !n.rtl || 37 === a && n.rtl) && n.slideNext(), (37 === a && !n.rtl || 39 === a && n.rtl) && n.slidePrev()) : (38 !== a && 40 !== a || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), 40 === a && n.slideNext(), 38 === a && n.slidePrev()), n.emit("keyPress", a)
                    }
                },
                enable: function() {
                    this.keyboard.enabled || (n(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
                },
                disable: function() {
                    this.keyboard.enabled && (n(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
                }
            },
            B = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0
                    }
                },
                create: function() {
                    c.extend(this, {
                        keyboard: {
                            enabled: !1,
                            enable: q.enable.bind(this),
                            disable: q.disable.bind(this),
                            handle: q.handle.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.keyboard.enabled && this.keyboard.enable()
                    },
                    destroy: function() {
                        this.keyboard.enabled && this.keyboard.disable()
                    }
                }
            };
        var F = {
                lastScrollTime: c.now(),
                event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    var t = "onwheel",
                        i = t in e;
                    if (!i) {
                        var n = e.createElement("div");
                        n.setAttribute(t, "return;"), i = "function" == typeof n[t]
                    }
                    return !i && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (i = e.implementation.hasFeature("Events.wheel", "3.0")), i
                }() ? "wheel" : "mousewheel",
                normalize: function(e) {
                    var t = 0,
                        i = 0,
                        n = 0,
                        r = 0;
                    return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, r = 10 * i, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !t && (t = n < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: i,
                        pixelX: n,
                        pixelY: r
                    }
                },
                handle: function(e) {
                    var i = e,
                        n = this,
                        r = n.params.mousewheel;
                    i.originalEvent && (i = i.originalEvent);
                    var a = 0,
                        s = n.rtl ? -1 : 1,
                        o = F.normalize(i);
                    if (r.forceToAxis)
                        if (n.isHorizontal()) {
                            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                            a = o.pixelX * s
                        } else {
                            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                            a = o.pixelY
                        }
                    else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * s : -o.pixelY;
                    if (0 === a) return !0;
                    if (r.invert && (a = -a), n.params.freeMode) {
                        var l = n.getTranslate() + a * r.sensitivity,
                            u = n.isBeginning,
                            d = n.isEnd;
                        if (l >= n.minTranslate() && (l = n.minTranslate()), l <= n.maxTranslate() && (l = n.maxTranslate()), n.setTransition(0), n.setTranslate(l), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!u && n.isBeginning || !d && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = c.nextTick(function() {
                                n.slideReset()
                            }, 300)), n.emit("scroll", i), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.stopAutoplay(), l === n.minTranslate() || l === n.maxTranslate()) return !0
                    } else {
                        if (c.now() - n.mousewheel.lastScrollTime > 60)
                            if (a < 0)
                                if (n.isEnd && !n.params.loop || n.animating) {
                                    if (r.releaseOnEdges) return !0
                                } else n.slideNext(), n.emit("scroll", i);
                        else if (n.isBeginning && !n.params.loop || n.animating) {
                            if (r.releaseOnEdges) return !0
                        } else n.slidePrev(), n.emit("scroll", i);
                        n.mousewheel.lastScrollTime = (new t.Date).getTime()
                    }
                    return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
                },
                enable: function() {
                    if (!F.event) return !1;
                    if (this.mousewheel.enabled) return !1;
                    var e = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (e = n(this.params.mousewheel.eventsTarged)), e.on(F.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
                },
                disable: function() {
                    if (!F.event) return !1;
                    if (!this.mousewheel.enabled) return !1;
                    var e = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (e = n(this.params.mousewheel.eventsTarged)), e.off(F.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
                }
            },
            W = {
                update: function() {
                    var e = this.params.navigation;
                    if (!this.params.loop) {
                        var t = this.navigation,
                            i = t.$nextEl,
                            n = t.$prevEl;
                        n && n.length > 0 && (this.isBeginning ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                    }
                },
                init: function() {
                    var e, t, i = this,
                        r = i.params.navigation;
                    (r.nextEl || r.prevEl) && (r.nextEl && (e = n(r.nextEl), i.params.uniqueNavElements && "string" == typeof r.nextEl && e.length > 1 && 1 === i.$el.find(r.nextEl).length && (e = i.$el.find(r.nextEl))), r.prevEl && (t = n(r.prevEl), i.params.uniqueNavElements && "string" == typeof r.prevEl && t.length > 1 && 1 === i.$el.find(r.prevEl).length && (t = i.$el.find(r.prevEl))), e && e.length > 0 && e.on("click", function(e) {
                        e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext()
                    }), t && t.length > 0 && t.on("click", function(e) {
                        e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev()
                    }), c.extend(i.navigation, {
                        $nextEl: e,
                        nextEl: e && e[0],
                        $prevEl: t,
                        prevEl: t && t[0]
                    }))
                },
                destroy: function() {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
                }
            },
            Y = {
                update: function() {
                    var e = this,
                        t = e.rtl,
                        i = e.params.pagination;
                    if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                            s = e.pagination.$el,
                            o = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), r > o - 1 && (r -= o), r < 0 && "bullets" !== e.params.paginationType && (r = o + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                            var l, c, u, d = e.pagination.bullets;
                            if (i.dynamicBullets && (e.pagination.bulletSize = d.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (r > e.previousIndex && e.pagination.dynamicBulletIndex < i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex += 1 : r < e.previousIndex && e.pagination.dynamicBulletIndex > 0 && (e.pagination.dynamicBulletIndex -= 1)), l = r - e.pagination.dynamicBulletIndex, u = ((c = l + (i.dynamicMainBullets - 1)) + l) / 2), d.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), s.length > 1) d.each(function(e, t) {
                                var a = n(t),
                                    s = a.index();
                                s === r && a.addClass(i.bulletActiveClass), i.dynamicBullets && (s >= l && s <= c && a.addClass(i.bulletActiveClass + "-main"), s === l && a.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), s === c && a.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                            });
                            else if (d.eq(r).addClass(i.bulletActiveClass), i.dynamicBullets) {
                                for (var h = d.eq(l), p = d.eq(c), f = l; f <= c; f += 1) d.eq(f).addClass(i.bulletActiveClass + "-main");
                                h.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), p.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                            }
                            if (i.dynamicBullets) {
                                var m = Math.min(d.length, i.dynamicMainBullets + 4),
                                    v = (e.pagination.bulletSize * m - e.pagination.bulletSize) / 2 - u * e.pagination.bulletSize,
                                    g = t ? "right" : "left";
                                d.css(e.isHorizontal() ? g : "top", v + "px")
                            }
                        }
                        if ("fraction" === i.type && (s.find("." + i.currentClass).text(r + 1), s.find("." + i.totalClass).text(o)), "progressbar" === i.type) {
                            var y = (r + 1) / o,
                                b = y,
                                w = 1;
                            e.isHorizontal() || (w = y, b = 1), s.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + w + ")").transition(e.params.speed)
                        }
                        "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(e, r + 1, o)), e.emit("paginationRender", e, s[0])) : e.emit("paginationUpdate", e, s[0]), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass)
                    }
                },
                render: function() {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                            n = e.pagination.$el,
                            r = "";
                        if ("bullets" === t.type) {
                            for (var a = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < a; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                            n.html(r), e.pagination.bullets = n.find("." + t.bulletClass)
                        }
                        "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', n.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', n.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                    }
                },
                init: function() {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el) {
                        var i = n(t.el);
                        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), t.clickable && i.on("click", "." + t.bulletClass, function(t) {
                            t.preventDefault();
                            var i = n(this).index() * e.params.slidesPerGroup;
                            e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                        }), c.extend(e.pagination, {
                            $el: i,
                            el: i[0]
                        }))
                    }
                },
                destroy: function() {
                    var e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var t = this.pagination.$el;
                        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                    }
                }
            },
            V = {
                setTranslate: function() {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar,
                            i = e.rtl,
                            n = e.progress,
                            r = t.dragSize,
                            a = t.trackSize,
                            s = t.$dragEl,
                            o = t.$el,
                            l = e.params.scrollbar,
                            c = r,
                            d = (a - r) * n;
                        i && e.isHorizontal() ? (d = -d) > 0 ? (c = r - d, d = 0) : -d + r > a && (c = a + d) : d < 0 ? (c = r + d, d = 0) : d + r > a && (c = a - d), e.isHorizontal() ? (u.transforms3d ? s.transform("translate3d(" + d + "px, 0, 0)") : s.transform("translateX(" + d + "px)"), s[0].style.width = c + "px") : (u.transforms3d ? s.transform("translate3d(0px, " + d + "px, 0)") : s.transform("translateY(" + d + "px)"), s[0].style.height = c + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
                            o[0].style.opacity = 0, o.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
                },
                updateSize: function() {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar,
                            i = t.$dragEl,
                            n = t.$el;
                        i[0].style.width = "", i[0].style.height = "";
                        var r, a = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
                            s = e.size / e.virtualSize,
                            o = s * (a / e.size);
                        r = "auto" === e.params.scrollbar.dragSize ? a * s : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = r + "px" : i[0].style.height = r + "px", n[0].style.display = s >= 1 ? "none" : "", e.params.scrollbarHide && (n[0].style.opacity = 0), c.extend(t, {
                            trackSize: a,
                            divider: s,
                            moveDivider: o,
                            dragSize: r
                        }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                    }
                },
                setDragPosition: function(e) {
                    var t, i = this,
                        n = i.scrollbar,
                        r = n.$el,
                        a = n.dragSize,
                        s = n.trackSize;
                    t = ((i.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[i.isHorizontal() ? "left" : "top"] - a / 2) / (s - a), t = Math.max(Math.min(t, 1), 0), i.rtl && (t = 1 - t);
                    var o = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
                    i.updateProgress(o), i.setTranslate(o), i.updateActiveIndex(), i.updateSlidesClasses()
                },
                onDragStart: function(e) {
                    var t = this.params.scrollbar,
                        i = this.scrollbar,
                        n = this.$wrapperEl,
                        r = i.$el,
                        a = i.$dragEl;
                    this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), n.transition(100), a.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), r.transition(0), t.hide && r.css("opacity", 1), this.emit("scrollbarDragStart", e)
                },
                onDragMove: function(e) {
                    var t = this.scrollbar,
                        i = this.$wrapperEl,
                        n = t.$el,
                        r = t.$dragEl;
                    this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), r.transition(0), this.emit("scrollbarDragMove", e))
                },
                onDragEnd: function(e) {
                    var t = this.params.scrollbar,
                        i = this.scrollbar.$el;
                    this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = c.nextTick(function() {
                        i.css("opacity", 0), i.transition(400)
                    }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideReset())
                },
                enableDraggable: function() {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var i = t.scrollbar,
                            n = t.touchEvents,
                            r = t.touchEventsDesktop,
                            a = t.params,
                            s = i.$el[0],
                            o = !(!u.passiveListener || !a.passiveListener) && {
                                passive: !1,
                                capture: !1
                            },
                            l = !(!u.passiveListener || !a.passiveListener) && {
                                passive: !0,
                                capture: !1
                            };
                        u.touch || !u.pointerEvents && !u.prefixedPointerEvents ? (u.touch && (s.addEventListener(n.start, t.scrollbar.onDragStart, o), s.addEventListener(n.move, t.scrollbar.onDragMove, o), s.addEventListener(n.end, t.scrollbar.onDragEnd, l)), (a.simulateTouch && !w.ios && !w.android || a.simulateTouch && !u.touch && w.ios) && (s.addEventListener("mousedown", t.scrollbar.onDragStart, o), e.addEventListener("mousemove", t.scrollbar.onDragMove, o), e.addEventListener("mouseup", t.scrollbar.onDragEnd, l))) : (s.addEventListener(r.start, t.scrollbar.onDragStart, o), e.addEventListener(r.move, t.scrollbar.onDragMove, o), e.addEventListener(r.end, t.scrollbar.onDragEnd, l))
                    }
                },
                disableDraggable: function() {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var i = t.scrollbar,
                            n = t.touchEvents,
                            r = t.touchEventsDesktop,
                            a = t.params,
                            s = i.$el[0],
                            o = !(!u.passiveListener || !a.passiveListener) && {
                                passive: !1,
                                capture: !1
                            },
                            l = !(!u.passiveListener || !a.passiveListener) && {
                                passive: !0,
                                capture: !1
                            };
                        u.touch || !u.pointerEvents && !u.prefixedPointerEvents ? (u.touch && (s.removeEventListener(n.start, t.scrollbar.onDragStart, o), s.removeEventListener(n.move, t.scrollbar.onDragMove, o), s.removeEventListener(n.end, t.scrollbar.onDragEnd, l)), (a.simulateTouch && !w.ios && !w.android || a.simulateTouch && !u.touch && w.ios) && (s.removeEventListener("mousedown", t.scrollbar.onDragStart, o), e.removeEventListener("mousemove", t.scrollbar.onDragMove, o), e.removeEventListener("mouseup", t.scrollbar.onDragEnd, l))) : (s.removeEventListener(r.start, t.scrollbar.onDragStart, o), e.removeEventListener(r.move, t.scrollbar.onDragMove, o), e.removeEventListener(r.end, t.scrollbar.onDragEnd, l))
                    }
                },
                init: function() {
                    if (this.params.scrollbar.el) {
                        var e = this.scrollbar,
                            t = this.$el,
                            i = this.params.scrollbar,
                            r = n(i.el);
                        this.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === t.find(i.el).length && (r = t.find(i.el));
                        var a = r.find("." + this.params.scrollbar.dragClass);
                        0 === a.length && (a = n('<div class="' + this.params.scrollbar.dragClass + '"></div>'), r.append(a)), c.extend(e, {
                            $el: r,
                            el: r[0],
                            $dragEl: a,
                            dragEl: a[0]
                        }), i.draggable && e.enableDraggable()
                    }
                },
                destroy: function() {
                    this.scrollbar.disableDraggable()
                }
            },
            G = {
                setTransform: function(e, t) {
                    var i = this.rtl,
                        r = n(e),
                        a = i ? -1 : 1,
                        s = r.attr("data-swiper-parallax") || "0",
                        o = r.attr("data-swiper-parallax-x"),
                        l = r.attr("data-swiper-parallax-y"),
                        c = r.attr("data-swiper-parallax-scale"),
                        u = r.attr("data-swiper-parallax-opacity");
                    if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = s, l = "0") : (l = s, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * a + "%" : o * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != u) {
                        var d = u - (u - 1) * (1 - Math.abs(t));
                        r[0].style.opacity = d
                    }
                    if (null == c) r.transform("translate3d(" + o + ", " + l + ", 0px)");
                    else {
                        var h = c - (c - 1) * (1 - Math.abs(t));
                        r.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + h + ")")
                    }
                },
                setTranslate: function() {
                    var e = this,
                        t = e.$el,
                        i = e.slides,
                        r = e.progress,
                        a = e.snapGrid;
                    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                        e.parallax.setTransform(i, r)
                    }), i.each(function(t, i) {
                        var s = i.progress;
                        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (s += Math.ceil(t / 2) - r * (a.length - 1)), s = Math.min(Math.max(s, -1), 1), n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                            e.parallax.setTransform(i, s)
                        })
                    })
                },
                setTransition: function(e) {
                    void 0 === e && (e = this.params.speed);
                    this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                        var r = n(i),
                            a = parseInt(r.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (a = 0), r.transition(a)
                    })
                }
            },
            X = {
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                        i = e.targetTouches[0].pageY,
                        n = e.targetTouches[1].pageX,
                        r = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2))
                },
                onGestureStart: function(e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        r = i.gesture;
                    if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !u.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        i.fakeGestureTouched = !0, r.scaleStart = X.getDistanceBetweenTouches(e)
                    }
                    r.$slideEl && r.$slideEl.length || (r.$slideEl = n(e.target).closest(".swiper-slide"), 0 === r.$slideEl.length && (r.$slideEl = this.slides.eq(this.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + t.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), this.zoom.isScaling = !0) : r.$imageEl = void 0
                },
                onGestureChange: function(e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!u.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        i.fakeGestureMoved = !0, n.scaleMove = X.getDistanceBetweenTouches(e)
                    }
                    n.$imageEl && 0 !== n.$imageEl.length && (u.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!u.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !w.android) return;
                        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                    }
                    n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
                },
                onTouchStart: function(e) {
                    var t = this.zoom,
                        i = t.gesture,
                        n = t.image;
                    i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (w.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove: function(e) {
                    var t = this.zoom,
                        i = t.gesture,
                        n = t.image,
                        r = t.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, n.isTouched && i.$slideEl)) {
                        n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = c.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = c.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (n.startX = -n.startX), this.rtl && (n.startY = -n.startY));
                        var a = n.width * t.scale,
                            s = n.height * t.scale;
                        if (!(a < i.slideWidth && s < i.slideHeight)) {
                            if (n.minX = Math.min(i.slideWidth / 2 - a / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - s / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !n.isMoved && !t.isScaling) {
                                if (this.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void(n.isTouched = !1);
                                if (!this.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void(n.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = n.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = n.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (n.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (n.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = n.touchesCurrent.x, r.prevPositionY = n.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function() {
                    var e = this.zoom,
                        t = e.gesture,
                        i = e.image,
                        n = e.velocity;
                    if (t.$imageEl && 0 !== t.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                        i.isTouched = !1, i.isMoved = !1;
                        var r = 300,
                            a = 300,
                            s = n.x * r,
                            o = i.currentX + s,
                            l = n.y * a,
                            c = i.currentY + l;
                        0 !== n.x && (r = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (a = Math.abs((c - i.currentY) / n.y));
                        var u = Math.max(r, a);
                        i.currentX = o, i.currentY = c;
                        var d = i.width * e.scale,
                            h = i.height * e.scale;
                        i.minX = Math.min(t.slideWidth / 2 - d / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - h / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(u).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function() {
                    var e = this.zoom,
                        t = e.gesture;
                    t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
                },
                toggle: function(e) {
                    var t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e)
                },
                in: function(e) {
                    var t, i, r, a, s, o, l, c, u, d, h, p, f, m, v, g, y = this.zoom,
                        b = this.params.zoom,
                        w = y.gesture,
                        x = y.image;
                    (w.$slideEl || (w.$slideEl = this.clickedSlide ? n(this.clickedSlide) : this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), y.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, y.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (v = w.$slideEl[0].offsetWidth, g = w.$slideEl[0].offsetHeight, r = w.$slideEl.offset().left + v / 2 - t, a = w.$slideEl.offset().top + g / 2 - i, l = w.$imageEl[0].offsetWidth, c = w.$imageEl[0].offsetHeight, u = l * y.scale, d = c * y.scale, f = -(h = Math.min(v / 2 - u / 2, 0)), m = -(p = Math.min(g / 2 - d / 2, 0)), (s = r * y.scale) < h && (s = h), s > f && (s = f), (o = a * y.scale) < p && (o = p), o > m && (o = m)) : (s = 0, o = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + s + "px, " + o + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
                },
                out: function() {
                    var e = this.zoom,
                        t = this.params.zoom,
                        i = e.gesture;
                    i.$slideEl || (i.$slideEl = this.clickedSlide ? n(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
                },
                enable: function() {
                    var e = this,
                        t = e.zoom;
                    if (!t.enabled) {
                        t.enabled = !0;
                        var i = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        u.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                    }
                },
                disable: function() {
                    var e = this,
                        t = e.zoom;
                    if (t.enabled) {
                        e.zoom.enabled = !1;
                        var i = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        u.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                    }
                }
            },
            U = {
                loadInSlide: function(e, t) {
                    void 0 === t && (t = !0);
                    var i = this,
                        r = i.params.lazy;
                    if (void 0 !== e && 0 !== i.slides.length) {
                        var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                            s = a.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
                        !a.hasClass(r.elementClass) || a.hasClass(r.loadedClass) || a.hasClass(r.loadingClass) || (s = s.add(a[0])), 0 !== s.length && s.each(function(e, s) {
                            var o = n(s);
                            o.addClass(r.loadingClass);
                            var l = o.attr("data-background"),
                                c = o.attr("data-src"),
                                u = o.attr("data-srcset"),
                                d = o.attr("data-sizes");
                            i.loadImage(o[0], c || l, u, d, !1, function() {
                                if (null != i && i && (!i || i.params) && !i.destroyed) {
                                    if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (u && (o.attr("srcset", u), o.removeAttr("data-srcset")), d && (o.attr("sizes", d), o.removeAttr("data-sizes")), c && (o.attr("src", c), o.removeAttr("data-src"))), o.addClass(r.loadedClass).removeClass(r.loadingClass), a.find("." + r.preloaderClass).remove(), i.params.loop && t) {
                                        var e = a.attr("data-swiper-slide-index");
                                        if (a.hasClass(i.params.slideDuplicateClass)) {
                                            var n = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                            i.lazy.loadInSlide(n.index(), !1)
                                        } else {
                                            var s = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            i.lazy.loadInSlide(s.index(), !1)
                                        }
                                    }
                                    i.emit("lazyImageReady", a[0], o[0])
                                }
                            }), i.emit("lazyImageLoad", a[0], o[0])
                        })
                    }
                },
                load: function() {
                    var e = this,
                        t = e.$wrapperEl,
                        i = e.params,
                        r = e.slides,
                        a = e.activeIndex,
                        s = e.virtual && i.virtual.enabled,
                        o = i.lazy,
                        l = i.slidesPerView;

                    function c(e) {
                        if (s) {
                            if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                        } else if (r[e]) return !0;
                        return !1
                    }

                    function u(e) {
                        return s ? n(e).attr("data-swiper-slide-index") : n(e).index()
                    }
                    if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(t, i) {
                        var r = s ? n(i).attr("data-swiper-slide-index") : n(i).index();
                        e.lazy.loadInSlide(r)
                    });
                    else if (l > 1)
                        for (var d = a; d < a + l; d += 1) c(d) && e.lazy.loadInSlide(d);
                    else e.lazy.loadInSlide(a);
                    if (o.loadPrevNext)
                        if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                            for (var h = o.loadPrevNextAmount, p = l, f = Math.min(a + p + Math.max(h, p), r.length), m = Math.max(a - Math.max(p, h), 0), v = a + l; v < f; v += 1) c(v) && e.lazy.loadInSlide(v);
                            for (var g = m; g < a; g += 1) c(g) && e.lazy.loadInSlide(g)
                        } else {
                            var y = t.children("." + i.slideNextClass);
                            y.length > 0 && e.lazy.loadInSlide(u(y));
                            var b = t.children("." + i.slidePrevClass);
                            b.length > 0 && e.lazy.loadInSlide(u(b))
                        }
                }
            },
            K = {
                LinearSpline: function(e, t) {
                    var i, n, r, a, s, o = function(e, t) {
                        for (n = -1, i = e.length; i - n > 1;) e[r = i + n >> 1] <= t ? n = r : i = r;
                        return i
                    };
                    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                        return e ? (s = o(this.x, e), a = s - 1, (e - this.x[a]) * (this.y[s] - this.y[a]) / (this.x[s] - this.x[a]) + this.y[a]) : 0
                    }, this
                },
                getInterpolateFunction: function(e) {
                    this.controller.spline || (this.controller.spline = this.params.loop ? new K.LinearSpline(this.slidesGrid, e.slidesGrid) : new K.LinearSpline(this.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, t) {
                    var i, n, r = this,
                        a = r.controller.control;

                    function s(e) {
                        var t = e.rtl && "horizontal" === e.params.direction ? -r.translate : r.translate;
                        "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), n = -r.controller.spline.interpolate(-t)), n && "container" !== r.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), n = (t - r.minTranslate()) * i + e.minTranslate()), r.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, r), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    if (Array.isArray(a))
                        for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof P && s(a[o]);
                    else a instanceof P && t !== a && s(a)
                },
                setTransition: function(e, t) {
                    var i, n = this,
                        r = n.controller.control;

                    function a(t) {
                        t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
                            r && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
                        }))
                    }
                    if (Array.isArray(r))
                        for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof P && a(r[i]);
                    else r instanceof P && t !== r && a(r)
                }
            },
            Q = {
                makeElFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addElRole: function(e, t) {
                    return e.attr("role", t), e
                },
                addElLabel: function(e, t) {
                    return e.attr("aria-label", t), e
                },
                disableEl: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enableEl: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(e) {
                    var t = this,
                        i = t.params.a11y;
                    if (13 === e.keyCode) {
                        var r = n(e.target);
                        t.navigation && t.navigation.$nextEl && r.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && r.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)), t.pagination && r.is("." + t.params.pagination.bulletClass) && r[0].click()
                    }
                },
                notify: function(e) {
                    var t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                updateNavigation: function() {
                    if (!this.params.loop) {
                        var e = this.navigation,
                            t = e.$nextEl,
                            i = e.$prevEl;
                        i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                    }
                },
                updatePagination: function() {
                    var e = this,
                        t = e.params.a11y;
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, r) {
                        var a = n(r);
                        e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                    })
                },
                init: function() {
                    var e = this;
                    e.$el.append(e.a11y.liveRegion);
                    var t, i, n = e.params.a11y;
                    e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, n.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, n.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
                },
                destroy: function() {
                    var e, t, i = this;
                    i.a11y.liveRegion && i.a11y.liveRegion.length > 0 && i.a11y.liveRegion.remove(), i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl), i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl), e && e.off("keydown", i.a11y.onEnterKey), t && t.off("keydown", i.a11y.onEnterKey), i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey)
                }
            },
            J = {
                init: function() {
                    if (this.params.history) {
                        if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                        var e = this.history;
                        e.initialized = !0, e.paths = J.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
                    }
                },
                destroy: function() {
                    this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
                },
                setHistoryPopState: function() {
                    this.history.paths = J.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = t.location.pathname.slice(1).split("/").filter(function(e) {
                            return "" !== e
                        }),
                        i = e.length;
                    return {
                        key: e[i - 2],
                        value: e[i - 1]
                    }
                },
                setHistory: function(e, i) {
                    if (this.history.initialized && this.params.history.enabled) {
                        var n = this.slides.eq(i),
                            r = J.slugify(n.attr("data-history"));
                        t.location.pathname.includes(e) || (r = e + "/" + r);
                        var a = t.history.state;
                        a && a.value === r || (this.params.history.replaceState ? t.history.replaceState({
                            value: r
                        }, null, r) : t.history.pushState({
                            value: r
                        }, null, r))
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, t, i) {
                    if (t)
                        for (var n = 0, r = this.slides.length; n < r; n += 1) {
                            var a = this.slides.eq(n);
                            if (J.slugify(a.attr("data-history")) === t && !a.hasClass(this.params.slideDuplicateClass)) {
                                var s = a.index();
                                this.slideTo(s, e, i)
                            }
                        } else this.slideTo(0, e, i)
                }
            },
            Z = {
                onHashCange: function() {
                    var t = e.location.hash.replace("#", "");
                    t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index())
                },
                setHash: function() {
                    if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                        if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                        else {
                            var i = this.slides.eq(this.activeIndex),
                                n = i.attr("data-hash") || i.attr("data-history");
                            e.location.hash = n || ""
                        }
                },
                init: function() {
                    var i = this;
                    if (!(!i.params.hashNavigation.enabled || i.params.history && i.params.history.enabled)) {
                        i.hashNavigation.initialized = !0;
                        var r = e.location.hash.replace("#", "");
                        if (r)
                            for (var a = 0, s = i.slides.length; a < s; a += 1) {
                                var o = i.slides.eq(a);
                                if ((o.attr("data-hash") || o.attr("data-history")) === r && !o.hasClass(i.params.slideDuplicateClass)) {
                                    var l = o.index();
                                    i.slideTo(l, 0, i.params.runCallbacksOnInit, !0)
                                }
                            }
                        i.params.hashNavigation.watchState && n(t).on("hashchange", i.hashNavigation.onHashCange)
                    }
                },
                destroy: function() {
                    this.params.hashNavigation.watchState && n(t).off("hashchange", this.hashNavigation.onHashCange)
                }
            },
            ee = {
                run: function() {
                    var e = this,
                        t = e.slides.eq(e.activeIndex),
                        i = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = c.nextTick(function() {
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                    }, i)
                },
                start: function() {
                    return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
                },
                stop: function() {
                    return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
                },
                pause: function(e) {
                    var t = this;
                    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function() {
                        t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    }) : (t.autoplay.paused = !1, t.autoplay.run())))
                }
            },
            te = {
                setTranslate: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) {
                        var i = this.slides.eq(t),
                            n = -i[0].swiperSlideOffset;
                        this.params.virtualTranslate || (n -= this.translate);
                        var r = 0;
                        this.isHorizontal() || (r = n, n = 0);
                        var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                        i.css({
                            opacity: a
                        }).transform("translate3d(" + n + "px, " + r + "px, 0px)")
                    }
                },
                setTransition: function(e) {
                    var t = this,
                        i = t.slides,
                        n = t.$wrapperEl;
                    if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                        var r = !1;
                        i.transitionEnd(function() {
                            if (!r && t && !t.destroyed) {
                                r = !0, t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i])
                            }
                        })
                    }
                }
            },
            ie = {
                setTranslate: function() {
                    var e, t = this,
                        i = t.$el,
                        r = t.$wrapperEl,
                        a = t.slides,
                        s = t.width,
                        o = t.height,
                        l = t.rtl,
                        c = t.size,
                        u = t.params.cubeEffect,
                        d = t.isHorizontal(),
                        h = t.virtual && t.params.virtual.enabled,
                        p = 0;
                    u.shadow && (d ? (0 === (e = r.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), r.append(e)), e.css({
                        height: s + "px"
                    })) : 0 === (e = i.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), i.append(e)));
                    for (var f = 0; f < a.length; f += 1) {
                        var m = a.eq(f),
                            v = f;
                        h && (v = parseInt(m.attr("data-swiper-slide-index"), 10));
                        var g = 90 * v,
                            y = Math.floor(g / 360);
                        l && (g = -g, y = Math.floor(-g / 360));
                        var b = Math.max(Math.min(m[0].progress, 1), -1),
                            w = 0,
                            x = 0,
                            E = 0;
                        v % 4 == 0 ? (w = 4 * -y * c, E = 0) : (v - 1) % 4 == 0 ? (w = 0, E = 4 * -y * c) : (v - 2) % 4 == 0 ? (w = c + 4 * y * c, E = c) : (v - 3) % 4 == 0 && (w = -c, E = 3 * c + 4 * c * y), l && (w = -w), d || (x = w, w = 0);
                        var T = "rotateX(" + (d ? 0 : -g) + "deg) rotateY(" + (d ? g : 0) + "deg) translate3d(" + w + "px, " + x + "px, " + E + "px)";
                        if (b <= 1 && b > -1 && (p = 90 * v + 90 * b, l && (p = 90 * -v - 90 * b)), m.transform(T), u.slideShadows) {
                            var C = d ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                                _ = d ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                            0 === C.length && (C = n('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), m.append(C)), 0 === _.length && (_ = n('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), m.append(_)), C.length && (C[0].style.opacity = Math.max(-b, 0)), _.length && (_[0].style.opacity = Math.max(b, 0))
                        }
                    }
                    if (r.css({
                            "-webkit-transform-origin": "50% 50% -" + c / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + c / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + c / 2 + "px",
                            "transform-origin": "50% 50% -" + c / 2 + "px"
                        }), u.shadow)
                        if (d) e.transform("translate3d(0px, " + (s / 2 + u.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
                        else {
                            var S = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
                                k = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2),
                                D = u.shadowScale,
                                I = u.shadowScale / k,
                                M = u.shadowOffset;
                            e.transform("scale3d(" + D + ", 1, " + I + ") translate3d(0px, " + (o / 2 + M) + "px, " + -o / 2 / I + "px) rotateX(-90deg)")
                        }
                    var P = A.isSafari || A.isUiWebView ? -c / 2 : 0;
                    r.transform("translate3d(0px,0," + P + "px) rotateX(" + (t.isHorizontal() ? 0 : p) + "deg) rotateY(" + (t.isHorizontal() ? -p : 0) + "deg)")
                },
                setTransition: function(e) {
                    var t = this.$el;
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
                }
            },
            ne = {
                setTranslate: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) {
                        var i = e.eq(t),
                            r = i[0].progress;
                        this.params.flipEffect.limitRotation && (r = Math.max(Math.min(i[0].progress, 1), -1));
                        var a = -180 * r,
                            s = 0,
                            o = -i[0].swiperSlideOffset,
                            l = 0;
                        if (this.isHorizontal() ? this.rtl && (a = -a) : (l = o, o = 0, s = -a, a = 0), i[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                            var c = this.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                u = this.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                            0 === c.length && (c = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), i.append(c)), 0 === u.length && (u = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(u)), c.length && (c[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0))
                        }
                        i.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + s + "deg) rotateY(" + a + "deg)")
                    }
                },
                setTransition: function(e) {
                    var t = this,
                        i = t.slides,
                        n = t.activeIndex,
                        r = t.$wrapperEl;
                    if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                        var a = !1;
                        i.eq(n).transitionEnd(function() {
                            if (!a && t && !t.destroyed) {
                                a = !0, t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) r.trigger(e[i])
                            }
                        })
                    }
                }
            },
            re = {
                setTranslate: function() {
                    for (var e = this.width, t = this.height, i = this.slides, r = this.$wrapperEl, a = this.slidesSizesGrid, s = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, c = o ? e / 2 - l : t / 2 - l, d = o ? s.rotate : -s.rotate, h = s.depth, p = 0, f = i.length; p < f; p += 1) {
                        var m = i.eq(p),
                            v = a[p],
                            g = (c - m[0].swiperSlideOffset - v / 2) / v * s.modifier,
                            y = o ? d * g : 0,
                            b = o ? 0 : d * g,
                            w = -h * Math.abs(g),
                            x = o ? 0 : s.stretch * g,
                            E = o ? s.stretch * g : 0;
                        Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0);
                        var T = "translate3d(" + E + "px," + x + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + y + "deg)";
                        if (m.transform(T), m[0].style.zIndex = 1 - Math.abs(Math.round(g)), s.slideShadows) {
                            var C = o ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                                _ = o ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                            0 === C.length && (C = n('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), m.append(C)), 0 === _.length && (_ = n('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), m.append(_)), C.length && (C[0].style.opacity = g > 0 ? g : 0), _.length && (_[0].style.opacity = -g > 0 ? -g : 0)
                        }
                    }(u.pointerEvents || u.prefixedPointerEvents) && (r[0].style.perspectiveOrigin = c + "px 50%")
                },
                setTransition: function(e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
            },
            ae = [O, N, L, z, H, $, B, {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create: function() {
                    c.extend(this, {
                        mousewheel: {
                            enabled: !1,
                            enable: F.enable.bind(this),
                            disable: F.disable.bind(this),
                            handle: F.handle.bind(this),
                            lastScrollTime: c.now()
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.mousewheel.enabled && this.mousewheel.enable()
                    },
                    destroy: function() {
                        this.mousewheel.enabled && this.mousewheel.disable()
                    }
                }
            }, {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create: function() {
                    c.extend(this, {
                        navigation: {
                            init: W.init.bind(this),
                            update: W.update.bind(this),
                            destroy: W.destroy.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.navigation.init(), this.navigation.update()
                    },
                    toEdge: function() {
                        this.navigation.update()
                    },
                    fromEdge: function() {
                        this.navigation.update()
                    },
                    destroy: function() {
                        this.navigation.destroy()
                    },
                    click: function(e) {
                        var t = this.navigation,
                            i = t.$nextEl,
                            r = t.$prevEl;
                        !this.params.navigation.hideOnClick || n(e.target).is(r) || n(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
                    }
                }
            }, {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function() {
                    c.extend(this, {
                        pagination: {
                            init: Y.init.bind(this),
                            render: Y.render.bind(this),
                            update: Y.update.bind(this),
                            destroy: Y.destroy.bind(this),
                            dynamicBulletIndex: 0
                        }
                    })
                },
                on: {
                    init: function() {
                        this.pagination.init(), this.pagination.render(), this.pagination.update()
                    },
                    activeIndexChange: function() {
                        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                    },
                    snapIndexChange: function() {
                        this.params.loop || this.pagination.update()
                    },
                    slidesLengthChange: function() {
                        this.params.loop && (this.pagination.render(), this.pagination.update())
                    },
                    snapGridLengthChange: function() {
                        this.params.loop || (this.pagination.render(), this.pagination.update())
                    },
                    destroy: function() {
                        this.pagination.destroy()
                    },
                    click: function(e) {
                        this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !n(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
                    }
                }
            }, {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                },
                create: function() {
                    var e = this;
                    c.extend(e, {
                        scrollbar: {
                            init: V.init.bind(e),
                            destroy: V.destroy.bind(e),
                            updateSize: V.updateSize.bind(e),
                            setTranslate: V.setTranslate.bind(e),
                            setTransition: V.setTransition.bind(e),
                            enableDraggable: V.enableDraggable.bind(e),
                            disableDraggable: V.disableDraggable.bind(e),
                            setDragPosition: V.setDragPosition.bind(e),
                            onDragStart: V.onDragStart.bind(e),
                            onDragMove: V.onDragMove.bind(e),
                            onDragEnd: V.onDragEnd.bind(e),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init: function() {
                        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                    },
                    update: function() {
                        this.scrollbar.updateSize()
                    },
                    resize: function() {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate: function() {
                        this.scrollbar.updateSize()
                    },
                    setTranslate: function() {
                        this.scrollbar.setTranslate()
                    },
                    setTransition: function(e) {
                        this.scrollbar.setTransition(e)
                    },
                    destroy: function() {
                        this.scrollbar.destroy()
                    }
                }
            }, {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create: function() {
                    c.extend(this, {
                        parallax: {
                            setTransform: G.setTransform.bind(this),
                            setTranslate: G.setTranslate.bind(this),
                            setTransition: G.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
                    },
                    init: function() {
                        this.params.parallax && this.parallax.setTranslate()
                    },
                    setTranslate: function() {
                        this.params.parallax && this.parallax.setTranslate()
                    },
                    setTransition: function(e) {
                        this.params.parallax && this.parallax.setTransition(e)
                    }
                }
            }, {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create: function() {
                    var e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            }
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
                        t[i] = X[i].bind(e)
                    }), c.extend(e, {
                        zoom: t
                    })
                },
                on: {
                    init: function() {
                        this.params.zoom.enabled && this.zoom.enable()
                    },
                    destroy: function() {
                        this.zoom.disable()
                    },
                    touchStart: function(e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e)
                    },
                    touchEnd: function(e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e)
                    },
                    doubleTap: function(e) {
                        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                    },
                    transitionEnd: function() {
                        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                    }
                }
            }, {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create: function() {
                    c.extend(this, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: U.load.bind(this),
                            loadInSlide: U.loadInSlide.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                    },
                    init: function() {
                        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                    },
                    scroll: function() {
                        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                    },
                    resize: function() {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    scrollbarDragMove: function() {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    transitionStart: function() {
                        this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                    },
                    transitionEnd: function() {
                        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                    }
                }
            }, {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create: function() {
                    c.extend(this, {
                        controller: {
                            control: this.params.controller.control,
                            getInterpolateFunction: K.getInterpolateFunction.bind(this),
                            setTranslate: K.setTranslate.bind(this),
                            setTransition: K.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    update: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    resize: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    observerUpdate: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    setTranslate: function(e, t) {
                        this.controller.control && this.controller.setTranslate(e, t)
                    },
                    setTransition: function(e, t) {
                        this.controller.control && this.controller.setTransition(e, t)
                    }
                }
            }, {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !1,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create: function() {
                    var e = this;
                    c.extend(e, {
                        a11y: {
                            liveRegion: n('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                        }
                    }), Object.keys(Q).forEach(function(t) {
                        e.a11y[t] = Q[t].bind(e)
                    })
                },
                on: {
                    init: function() {
                        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                    },
                    toEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    fromEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    paginationUpdate: function() {
                        this.params.a11y.enabled && this.a11y.updatePagination()
                    },
                    destroy: function() {
                        this.params.a11y.enabled && this.a11y.destroy()
                    }
                }
            }, {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create: function() {
                    c.extend(this, {
                        history: {
                            init: J.init.bind(this),
                            setHistory: J.setHistory.bind(this),
                            setHistoryPopState: J.setHistoryPopState.bind(this),
                            scrollToSlide: J.scrollToSlide.bind(this),
                            destroy: J.destroy.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.history.enabled && this.history.init()
                    },
                    destroy: function() {
                        this.params.history.enabled && this.history.destroy()
                    },
                    transitionEnd: function() {
                        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                    }
                }
            }, {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create: function() {
                    c.extend(this, {
                        hashNavigation: {
                            initialized: !1,
                            init: Z.init.bind(this),
                            destroy: Z.destroy.bind(this),
                            setHash: Z.setHash.bind(this),
                            onHashCange: Z.onHashCange.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.init()
                    },
                    destroy: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                    },
                    transitionEnd: function() {
                        this.hashNavigation.initialized && this.hashNavigation.setHash()
                    }
                }
            }, {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create: function() {
                    c.extend(this, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: ee.run.bind(this),
                            start: ee.start.bind(this),
                            stop: ee.stop.bind(this),
                            pause: ee.pause.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.autoplay.enabled && this.autoplay.start()
                    },
                    beforeTransitionStart: function(e, t) {
                        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                    },
                    sliderFirstMove: function() {
                        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                    },
                    destroy: function() {
                        this.autoplay.running && this.autoplay.stop()
                    }
                }
            }, {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create: function() {
                    c.extend(this, {
                        fadeEffect: {
                            setTranslate: te.setTranslate.bind(this),
                            setTransition: te.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("fade" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "fade");
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            c.extend(this.params, e), c.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create: function() {
                    c.extend(this, {
                        cubeEffect: {
                            setTranslate: ie.setTranslate.bind(this),
                            setTransition: ie.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("cube" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0
                            };
                            c.extend(this.params, e), c.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create: function() {
                    c.extend(this, {
                        flipEffect: {
                            setTranslate: ne.setTranslate.bind(this),
                            setTransition: ne.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("flip" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            c.extend(this.params, e), c.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() {
                        "flip" === this.params.effect && this.flipEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create: function() {
                    c.extend(this, {
                        coverflowEffect: {
                            setTranslate: re.setTranslate.bind(this),
                            setTransition: re.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate: function() {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                    }
                }
            }];
        return void 0 === P.use && (P.use = P.Class.use, P.installModule = P.Class.installModule), P.use(ae), P
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        e.extend(e.fn, {
            validate: function(t) {
                if (this.length) {
                    var i = e.data(this[0], "validator");
                    return i || (this.attr("novalidate", "novalidate"), i = new e.validator(t, this[0]), e.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                        i.submitButton = t.currentTarget, e(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                    }), this.on("submit.validate", function(t) {
                        function n() {
                            var n, r;
                            return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)), !i.settings.submitHandler || (r = i.settings.submitHandler.call(i, i.currentForm, t), n && n.remove(), void 0 !== r && r)
                        }
                        return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
                    })), i)
                }
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
            },
            valid: function() {
                var t, i, n;
                return e(this[0]).is("form") ? t = this.validate().form() : (n = [], t = !0, i = e(this[0].form).validate(), this.each(function() {
                    (t = i.element(this) && t) || (n = n.concat(i.errorList))
                }), i.errorList = n), t
            },
            rules: function(t, i) {
                var n, r, a, s, o, l, c = this[0];
                if (null != c && (!c.form && c.hasAttribute("contenteditable") && (c.form = this.closest("form")[0], c.name = this.attr("name")), null != c.form)) {
                    if (t) switch (r = (n = e.data(c.form, "validator").settings).rules, a = e.validator.staticRules(c), t) {
                        case "add":
                            e.extend(a, e.validator.normalizeRule(i)), delete a.messages, r[c.name] = a, i.messages && (n.messages[c.name] = e.extend(n.messages[c.name], i.messages));
                            break;
                        case "remove":
                            return i ? (l = {}, e.each(i.split(/\s/), function(e, t) {
                                l[t] = a[t], delete a[t]
                            }), l) : (delete r[c.name], a)
                    }
                    return (s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(c), e.validator.attributeRules(c), e.validator.dataRules(c), e.validator.staticRules(c)), c)).required && (o = s.required, delete s.required, s = e.extend({
                        required: o
                    }, s)), s.remote && (o = s.remote, delete s.remote, s = e.extend(s, {
                        remote: o
                    })), s
                }
            }
        }), e.extend(e.expr.pseudos || e.expr[":"], {
            blank: function(t) {
                return !e.trim("" + e(t).val())
            },
            filled: function(t) {
                var i = e(t).val();
                return null !== i && !!e.trim("" + i)
            },
            unchecked: function(t) {
                return !e(t).prop("checked")
            }
        }), e.validator = function(t, i) {
            this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = i, this.init()
        }, e.validator.format = function(t, i) {
            return 1 === arguments.length ? function() {
                var i = e.makeArray(arguments);
                return i.unshift(t), e.validator.format.apply(this, i)
            } : void 0 === i ? t : (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), e.each(i, function(e, i) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                    return i
                })
            }), t)
        }, e.extend(e.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: e([]),
                errorLabelContainer: e([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(e) {
                    this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
                },
                onfocusout: function(e) {
                    this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                },
                onkeyup: function(t, i) {
                    9 === i.which && "" === this.elementValue(t) || -1 !== e.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
                },
                onclick: function(e) {
                    e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                },
                highlight: function(t, i, n) {
                    "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n)
                },
                unhighlight: function(t, i, n) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n)
                }
            },
            setDefaults: function(t) {
                e.extend(e.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: e.validator.format("Please enter no more than {0} characters."),
                minlength: e.validator.format("Please enter at least {0} characters."),
                rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                range: e.validator.format("Please enter a value between {0} and {1}."),
                max: e.validator.format("Please enter a value less than or equal to {0}."),
                min: e.validator.format("Please enter a value greater than or equal to {0}."),
                step: e.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var t, i = this.groups = {};

                    function n(t) {
                        !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name"));
                        var i = e.data(this.form, "validator"),
                            n = "on" + t.type.replace(/^validate/, ""),
                            r = i.settings;
                        r[n] && !e(this).is(r.ignore) && r[n].call(i, this, t)
                    }
                    e.each(this.settings.groups, function(t, n) {
                        "string" == typeof n && (n = n.split(/\s/)), e.each(n, function(e, n) {
                            i[n] = t
                        })
                    }), t = this.settings.rules, e.each(t, function(i, n) {
                        t[i] = e.validator.normalizeRule(n)
                    }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", n).on("click.validate", "select, option, [type='radio'], [type='checkbox']", n), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                    return this.valid()
                },
                element: function(t) {
                    var i, n, r = this.clean(t),
                        a = this.validationTargetFor(r),
                        s = this,
                        o = !0;
                    return void 0 === a ? delete this.invalid[r.name] : (this.prepareElement(a), this.currentElements = e(a), (n = this.groups[a.name]) && e.each(this.groups, function(e, t) {
                        t === n && e !== a.name && (r = s.validationTargetFor(s.clean(s.findByName(e)))) && r.name in s.invalid && (s.currentElements.push(r), o = s.check(r) && o)
                    }), i = !1 !== this.check(a), o = o && i, this.invalid[a.name] = !i, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !i)), o
                },
                showErrors: function(t) {
                    if (t) {
                        var i = this;
                        e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function(e, t) {
                            return {
                                message: e,
                                element: i.findByName(t)[0]
                            }
                        }), this.successList = e.grep(this.successList, function(e) {
                            return !(e.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                    var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(t)
                },
                resetElements: function(e) {
                    var t;
                    if (this.settings.unhighlight)
                        for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                    else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(e) {
                    var t, i = 0;
                    for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && i++;
                    return i
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(e) {
                    e.not(this.containers).text(""), this.addWrapper(e).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                },
                findLastActive: function() {
                    var t = this.lastActive;
                    return t && 1 === e.grep(this.errorList, function(e) {
                        return e.element.name === t.name
                    }).length && t
                },
                elements: function() {
                    var t = this,
                        i = {};
                    return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        var n = this.name || e(this).attr("name");
                        return !n && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = n), !(n in i || !t.objectLength(e(this).rules())) && (i[n] = !0, !0)
                    })
                },
                clean: function(t) {
                    return e(t)[0]
                },
                errors: function() {
                    var t = this.settings.errorClass.split(" ").join(".");
                    return e(this.settings.errorElement + "." + t, this.errorContext)
                },
                resetInternals: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
                },
                reset: function() {
                    this.resetInternals(), this.currentElements = e([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(e) {
                    this.reset(), this.toHide = this.errorsFor(e)
                },
                elementValue: function(t) {
                    var i, n, r = e(t),
                        a = t.type;
                    return "radio" === a || "checkbox" === a ? this.findByName(t.name).filter(":checked").val() : "number" === a && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (i = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === a ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/")) >= 0 ? i.substr(n + 1) : (n = i.lastIndexOf("\\")) >= 0 ? i.substr(n + 1) : i : "string" == typeof i ? i.replace(/\r/g, "") : i)
                },
                check: function(t) {
                    t = this.validationTargetFor(this.clean(t));
                    var i, n, r, a, s = e(t).rules(),
                        o = e.map(s, function(e, t) {
                            return t
                        }).length,
                        l = !1,
                        c = this.elementValue(t);
                    if ("function" == typeof s.normalizer ? a = s.normalizer : "function" == typeof this.settings.normalizer && (a = this.settings.normalizer), a) {
                        if ("string" != typeof(c = a.call(t, c))) throw new TypeError("The normalizer should return a string value.");
                        delete s.normalizer
                    }
                    for (n in s) {
                        r = {
                            method: n,
                            parameters: s[n]
                        };
                        try {
                            if ("dependency-mismatch" === (i = e.validator.methods[n].call(this, c, t, r.parameters)) && 1 === o) {
                                l = !0;
                                continue
                            }
                            if (l = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                            if (!i) return this.formatAndAdd(t, r), !1
                        } catch (e) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e
                        }
                    }
                    if (!l) return this.objectLength(s) && this.successList.push(t), !0
                },
                customDataMessage: function(t, i) {
                    return e(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || e(t).data("msg")
                },
                customMessage: function(e, t) {
                    var i = this.settings.messages[e];
                    return i && (i.constructor === String ? i : i[t])
                },
                findDefined: function() {
                    for (var e = 0; e < arguments.length; e++)
                        if (void 0 !== arguments[e]) return arguments[e]
                },
                defaultMessage: function(t, i) {
                    "string" == typeof i && (i = {
                        method: i
                    });
                    var n = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                        r = /\$?\{(\d+)\}/g;
                    return "function" == typeof n ? n = n.call(this, i.parameters, t) : r.test(n) && (n = e.validator.format(n.replace(r, "{$1}"), i.parameters)), n
                },
                formatAndAdd: function(e, t) {
                    var i = this.defaultMessage(e, t);
                    this.errorList.push({
                        message: i,
                        element: e,
                        method: t.method
                    }), this.errorMap[e.name] = i, this.submitted[e.name] = i
                },
                addWrapper: function(e) {
                    return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
                },
                defaultShowErrors: function() {
                    var e, t, i;
                    for (e = 0; this.errorList[e]; e++) i = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight)
                        for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return e(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(t, i) {
                    var n, r, a, s, o = this.errorsFor(t),
                        l = this.idOrName(t),
                        c = e(t).attr("aria-describedby");
                    o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(i)) : (n = o = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (n = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, e(t)) : n.insertAfter(t), o.is("label") ? o.attr("for", l) : 0 === o.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (a = o.attr("id"), c ? c.match(new RegExp("\\b" + this.escapeCssMeta(a) + "\\b")) || (c += " " + a) : c = a, e(t).attr("aria-describedby", c), (r = this.groups[t.name]) && (s = this, e.each(s.groups, function(t, i) {
                        i === r && e("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", o.attr("id"))
                    })))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, t)), this.toShow = this.toShow.add(o)
                },
                errorsFor: function(t) {
                    var i = this.escapeCssMeta(this.idOrName(t)),
                        n = e(t).attr("aria-describedby"),
                        r = "label[for='" + i + "'], label[for='" + i + "'] *";
                    return n && (r = r + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(r)
                },
                escapeCssMeta: function(e) {
                    return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
                },
                idOrName: function(e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                },
                validationTargetFor: function(t) {
                    return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
                },
                checkable: function(e) {
                    return /radio|checkbox/i.test(e.type)
                },
                findByName: function(t) {
                    return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
                },
                getLength: function(t, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return e("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function(e, t) {
                    return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
                },
                dependTypes: {
                    boolean: function(e) {
                        return e
                    },
                    string: function(t, i) {
                        return !!e(t, i.form).length
                    },
                    function: function(e, t) {
                        return e(t)
                    }
                },
                optional: function(t) {
                    var i = this.elementValue(t);
                    return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
                },
                startRequest: function(t) {
                    this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
                },
                stopRequest: function(t, i) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(t, i) {
                    return i = "string" == typeof i && i || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, {
                            method: i
                        })
                    })
                },
                destroy: function() {
                    this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(t, i) {
                t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
            },
            classRules: function(t) {
                var i = {},
                    n = e(t).attr("class");
                return n && e.each(n.split(" "), function() {
                    this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
                }), i
            },
            normalizeAttributeRule: function(e, t, i, n) {
                /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? e[i] = n : t === i && "range" !== t && (e[i] = !0)
            },
            attributeRules: function(t) {
                var i, n, r = {},
                    a = e(t),
                    s = t.getAttribute("type");
                for (i in e.validator.methods) "required" === i ? ("" === (n = t.getAttribute(i)) && (n = !0), n = !!n) : n = a.attr(i), this.normalizeAttributeRule(r, s, i, n);
                return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
            },
            dataRules: function(t) {
                var i, n, r = {},
                    a = e(t),
                    s = t.getAttribute("type");
                for (i in e.validator.methods) n = a.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(r, s, i, n);
                return r
            },
            staticRules: function(t) {
                var i = {},
                    n = e.data(t.form, "validator");
                return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}), i
            },
            normalizeRules: function(t, i) {
                return e.each(t, function(n, r) {
                    if (!1 !== r) {
                        if (r.param || r.depends) {
                            var a = !0;
                            switch (typeof r.depends) {
                                case "string":
                                    a = !!e(r.depends, i.form).length;
                                    break;
                                case "function":
                                    a = r.depends.call(i, i)
                            }
                            a ? t[n] = void 0 === r.param || r.param : (e.data(i.form, "validator").resetElements(e(i)), delete t[n])
                        }
                    } else delete t[n]
                }), e.each(t, function(n, r) {
                    t[n] = e.isFunction(r) && "normalizer" !== n ? r(i) : r
                }), e.each(["minlength", "maxlength"], function() {
                    t[this] && (t[this] = Number(t[this]))
                }), e.each(["rangelength", "range"], function() {
                    var i;
                    t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
                }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
            },
            normalizeRule: function(t) {
                if ("string" == typeof t) {
                    var i = {};
                    e.each(t.split(/\s/), function() {
                        i[this] = !0
                    }), t = i
                }
                return t
            },
            addMethod: function(t, i, n) {
                e.validator.methods[t] = i, e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t], i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
            },
            methods: {
                required: function(t, i, n) {
                    if (!this.depend(n, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var r = e(i).val();
                        return r && r.length > 0
                    }
                    return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
                },
                email: function(e, t) {
                    return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
                },
                url: function(e, t) {
                    return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
                },
                date: function(e, t) {
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
                },
                dateISO: function(e, t) {
                    return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
                },
                number: function(e, t) {
                    return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                },
                digits: function(e, t) {
                    return this.optional(t) || /^\d+$/.test(e)
                },
                minlength: function(t, i, n) {
                    var r = e.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || r >= n
                },
                maxlength: function(t, i, n) {
                    var r = e.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || r <= n
                },
                rangelength: function(t, i, n) {
                    var r = e.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || r >= n[0] && r <= n[1]
                },
                min: function(e, t, i) {
                    return this.optional(t) || e >= i
                },
                max: function(e, t, i) {
                    return this.optional(t) || e <= i
                },
                range: function(e, t, i) {
                    return this.optional(t) || e >= i[0] && e <= i[1]
                },
                step: function(t, i, n) {
                    var r, a = e(i).attr("type"),
                        s = "Step attribute on input type " + a + " is not supported.",
                        o = new RegExp("\\b" + a + "\\b"),
                        l = function(e) {
                            var t = ("" + e).match(/(?:\.(\d+))?$/);
                            return t && t[1] ? t[1].length : 0
                        },
                        c = function(e) {
                            return Math.round(e * Math.pow(10, r))
                        },
                        u = !0;
                    if (a && !o.test(["text", "number", "range"].join())) throw new Error(s);
                    return r = l(n), (l(t) > r || c(t) % c(n) != 0) && (u = !1), this.optional(i) || u
                },
                equalTo: function(t, i, n) {
                    var r = e(n);
                    return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        e(i).valid()
                    }), t === r.val()
                },
                remote: function(t, i, n, r) {
                    if (this.optional(i)) return "dependency-mismatch";
                    r = "string" == typeof r && r || "remote";
                    var a, s, o, l = this.previousValue(i, r);
                    return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][r], this.settings.messages[i.name][r] = l.message, n = "string" == typeof n && {
                        url: n
                    } || n, o = e.param(e.extend({
                        data: t
                    }, n.data)), l.old === o ? l.valid : (l.old = o, a = this, this.startRequest(i), (s = {})[i.name] = t, e.ajax(e.extend(!0, {
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: s,
                        context: a.currentForm,
                        success: function(e) {
                            var n, s, o, c = !0 === e || "true" === e;
                            a.settings.messages[i.name][r] = l.originalMessage, c ? (o = a.formSubmitted, a.resetInternals(), a.toHide = a.errorsFor(i), a.formSubmitted = o, a.successList.push(i), a.invalid[i.name] = !1, a.showErrors()) : (n = {}, s = e || a.defaultMessage(i, {
                                method: r,
                                parameters: t
                            }), n[i.name] = l.message = s, a.invalid[i.name] = !0, a.showErrors(n)), l.valid = c, a.stopRequest(i, c)
                        }
                    }, n)), "pending")
                }
            }
        });
        var t, i = {};
        return e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, n) {
            var r = e.port;
            "abort" === e.mode && (i[r] && i[r].abort(), i[r] = n)
        }) : (t = e.ajax, e.ajax = function(n) {
            var r = ("mode" in n ? n : e.ajaxSettings).mode,
                a = ("port" in n ? n : e.ajaxSettings).port;
            return "abort" === r ? (i[a] && i[a].abort(), i[a] = t.apply(this, arguments), i[a]) : t.apply(this, arguments)
        }), e
    });
var pJS = function(e, t) {
    var i = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: i,
            w: i.offsetWidth,
            h: i.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var n = this.pJS;
    t && Object.deepExtend(n, t), n.tmp.obj = {
        size_value: n.particles.size.value,
        size_anim_speed: n.particles.size.anim.speed,
        move_speed: n.particles.move.speed,
        line_linked_distance: n.particles.line_linked.distance,
        line_linked_width: n.particles.line_linked.width,
        mode_grab_distance: n.interactivity.modes.grab.distance,
        mode_bubble_distance: n.interactivity.modes.bubble.distance,
        mode_bubble_size: n.interactivity.modes.bubble.size,
        mode_repulse_distance: n.interactivity.modes.repulse.distance
    }, n.fn.retinaInit = function() {
        n.retina_detect && window.devicePixelRatio > 1 ? (n.canvas.pxratio = window.devicePixelRatio, n.tmp.retina = !0) : (n.canvas.pxratio = 1, n.tmp.retina = !1), n.canvas.w = n.canvas.el.offsetWidth * n.canvas.pxratio, n.canvas.h = n.canvas.el.offsetHeight * n.canvas.pxratio, n.particles.size.value = n.tmp.obj.size_value * n.canvas.pxratio, n.particles.size.anim.speed = n.tmp.obj.size_anim_speed * n.canvas.pxratio, n.particles.move.speed = n.tmp.obj.move_speed * n.canvas.pxratio, n.particles.line_linked.distance = n.tmp.obj.line_linked_distance * n.canvas.pxratio, n.interactivity.modes.grab.distance = n.tmp.obj.mode_grab_distance * n.canvas.pxratio, n.interactivity.modes.bubble.distance = n.tmp.obj.mode_bubble_distance * n.canvas.pxratio, n.particles.line_linked.width = n.tmp.obj.line_linked_width * n.canvas.pxratio, n.interactivity.modes.bubble.size = n.tmp.obj.mode_bubble_size * n.canvas.pxratio, n.interactivity.modes.repulse.distance = n.tmp.obj.mode_repulse_distance * n.canvas.pxratio
    }, n.fn.canvasInit = function() {
        n.canvas.ctx = n.canvas.el.getContext("2d")
    }, n.fn.canvasSize = function() {
        n.canvas.el.width = n.canvas.w, n.canvas.el.height = n.canvas.h, n && n.interactivity.events.resize && window.addEventListener("resize", function() {
            n.canvas.w = n.canvas.el.offsetWidth, n.canvas.h = n.canvas.el.offsetHeight, n.tmp.retina && (n.canvas.w *= n.canvas.pxratio, n.canvas.h *= n.canvas.pxratio), n.canvas.el.width = n.canvas.w, n.canvas.el.height = n.canvas.h, n.particles.move.enable || (n.fn.particlesEmpty(), n.fn.particlesCreate(), n.fn.particlesDraw(), n.fn.vendors.densityAutoParticles()), n.fn.vendors.densityAutoParticles()
        })
    }, n.fn.canvasPaint = function() {
        n.canvas.ctx.fillRect(0, 0, n.canvas.w, n.canvas.h)
    }, n.fn.canvasClear = function() {
        n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h)
    }, n.fn.particle = function(e, t, i) {
        if (this.radius = (n.particles.size.random ? Math.random() : 1) * n.particles.size.value, n.particles.size.anim.enable && (this.size_status = !1, this.vs = n.particles.size.anim.speed / 100, n.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * n.canvas.w, this.y = i ? i.y : Math.random() * n.canvas.h, this.x > n.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > n.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), n.particles.move.bounce && n.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == typeof e.value)
            if (e.value instanceof Array) {
                var r = e.value[Math.floor(Math.random() * n.particles.color.value.length)];
                this.color.rgb = hexToRgb(r)
            } else null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = {
                r: e.value.r,
                g: e.value.g,
                b: e.value.b
            }), null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = {
                h: e.value.h,
                s: e.value.s,
                l: e.value.l
            });
        else "random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (n.particles.opacity.random ? Math.random() : 1) * n.particles.opacity.value, n.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = n.particles.opacity.anim.speed / 100, n.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var a = {};
        switch (n.particles.move.direction) {
            case "top":
                a = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                a = {
                    x: .5,
                    y: -.5
                };
                break;
            case "right":
                a = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                a = {
                    x: .5,
                    y: .5
                };
                break;
            case "bottom":
                a = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                a = {
                    x: -.5,
                    y: 1
                };
                break;
            case "left":
                a = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                a = {
                    x: -.5,
                    y: -.5
                };
                break;
            default:
                a = {
                    x: 0,
                    y: 0
                }
        }
        n.particles.move.straight ? (this.vx = a.x, this.vy = a.y, n.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = a.x + Math.random() - .5, this.vy = a.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var s = n.particles.shape.type;
        if ("object" == typeof s) {
            if (s instanceof Array) {
                var o = s[Math.floor(Math.random() * s.length)];
                this.shape = o
            }
        } else this.shape = s;
        if ("image" == this.shape) {
            var l = n.particles.shape;
            this.img = {
                src: l.image.src,
                ratio: l.image.width / l.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == n.tmp.img_type && null != n.tmp.source_svg && (n.fn.vendors.createSvgImg(this), n.tmp.pushing && (this.img.loaded = !1))
        }
    }, n.fn.particle.prototype.draw = function() {
        var e = this;
        if (null != e.radius_bubble) var t = e.radius_bubble;
        else t = e.radius;
        if (null != e.opacity_bubble) var i = e.opacity_bubble;
        else i = e.opacity;
        if (e.color.rgb) var r = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + i + ")";
        else r = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + i + ")";
        switch (n.canvas.ctx.fillStyle = r, n.canvas.ctx.beginPath(), e.shape) {
            case "circle":
                n.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                n.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
                break;
            case "triangle":
                n.fn.vendors.drawShape(n.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
                break;
            case "polygon":
                n.fn.vendors.drawShape(n.canvas.ctx, e.x - t / (n.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                n.fn.vendors.drawShape(n.canvas.ctx, e.x - 2 * t / (n.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                ;
                if ("svg" == n.tmp.img_type) var a = e.img.obj;
                else a = n.tmp.img_obj;
                a && n.canvas.ctx.drawImage(a, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
        }
        n.canvas.ctx.closePath(), n.particles.shape.stroke.width > 0 && (n.canvas.ctx.strokeStyle = n.particles.shape.stroke.color, n.canvas.ctx.lineWidth = n.particles.shape.stroke.width, n.canvas.ctx.stroke()), n.canvas.ctx.fill()
    }, n.fn.particlesCreate = function() {
        for (var e = 0; e < n.particles.number.value; e++) n.particles.array.push(new n.fn.particle(n.particles.color, n.particles.opacity.value))
    }, n.fn.particlesUpdate = function() {
        for (var e = 0; e < n.particles.array.length; e++) {
            var t = n.particles.array[e];
            if (n.particles.move.enable) {
                var i = n.particles.move.speed / 2;
                t.x += t.vx * i, t.y += t.vy * i
            }
            if (n.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= n.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= n.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), n.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= n.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= n.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == n.particles.move.out_mode) var r = {
                x_left: t.radius,
                x_right: n.canvas.w,
                y_top: t.radius,
                y_bottom: n.canvas.h
            };
            else r = {
                x_left: -t.radius,
                x_right: n.canvas.w + t.radius,
                y_top: -t.radius,
                y_bottom: n.canvas.h + t.radius
            };
            switch (t.x - t.radius > n.canvas.w ? (t.x = r.x_left, t.y = Math.random() * n.canvas.h) : t.x + t.radius < 0 && (t.x = r.x_right, t.y = Math.random() * n.canvas.h), t.y - t.radius > n.canvas.h ? (t.y = r.y_top, t.x = Math.random() * n.canvas.w) : t.y + t.radius < 0 && (t.y = r.y_bottom, t.x = Math.random() * n.canvas.w), n.particles.move.out_mode) {
                case "bounce":
                    t.x + t.radius > n.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > n.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
            }
            if (isInArray("grab", n.interactivity.events.onhover.mode) && n.fn.modes.grabParticle(t), (isInArray("bubble", n.interactivity.events.onhover.mode) || isInArray("bubble", n.interactivity.events.onclick.mode)) && n.fn.modes.bubbleParticle(t), (isInArray("repulse", n.interactivity.events.onhover.mode) || isInArray("repulse", n.interactivity.events.onclick.mode)) && n.fn.modes.repulseParticle(t), n.particles.line_linked.enable || n.particles.move.attract.enable)
                for (var a = e + 1; a < n.particles.array.length; a++) {
                    var s = n.particles.array[a];
                    n.particles.line_linked.enable && n.fn.interact.linkParticles(t, s), n.particles.move.attract.enable && n.fn.interact.attractParticles(t, s), n.particles.move.bounce && n.fn.interact.bounceParticles(t, s)
                }
        }
    }, n.fn.particlesDraw = function() {
        n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h), n.fn.particlesUpdate();
        for (var e = 0; e < n.particles.array.length; e++) {
            n.particles.array[e].draw()
        }
    }, n.fn.particlesEmpty = function() {
        n.particles.array = []
    }, n.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(n.fn.checkAnimFrame), cancelRequestAnimFrame(n.fn.drawAnimFrame), n.tmp.source_svg = void 0, n.tmp.img_obj = void 0, n.tmp.count_svg = 0, n.fn.particlesEmpty(), n.fn.canvasClear(), n.fn.vendors.start()
    }, n.fn.interact.linkParticles = function(e, t) {
        var i = e.x - t.x,
            r = e.y - t.y,
            a = Math.sqrt(i * i + r * r);
        if (a <= n.particles.line_linked.distance) {
            var s = n.particles.line_linked.opacity - a / (1 / n.particles.line_linked.opacity) / n.particles.line_linked.distance;
            if (s > 0) {
                var o = n.particles.line_linked.color_rgb_line;
                n.canvas.ctx.strokeStyle = "rgba(" + o.r + "," + o.g + "," + o.b + "," + s + ")", n.canvas.ctx.lineWidth = n.particles.line_linked.width, n.canvas.ctx.beginPath(), n.canvas.ctx.moveTo(e.x, e.y), n.canvas.ctx.lineTo(t.x, t.y), n.canvas.ctx.stroke(), n.canvas.ctx.closePath()
            }
        }
    }, n.fn.interact.attractParticles = function(e, t) {
        var i = e.x - t.x,
            r = e.y - t.y;
        if (Math.sqrt(i * i + r * r) <= n.particles.line_linked.distance) {
            var a = i / (1e3 * n.particles.move.attract.rotateX),
                s = r / (1e3 * n.particles.move.attract.rotateY);
            e.vx -= a, e.vy -= s, t.vx += a, t.vy += s
        }
    }, n.fn.interact.bounceParticles = function(e, t) {
        var i = e.x - t.x,
            n = e.y - t.y;
        Math.sqrt(i * i + n * n) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
    }, n.fn.modes.pushParticles = function(e, t) {
        n.tmp.pushing = !0;
        for (var i = 0; i < e; i++) n.particles.array.push(new n.fn.particle(n.particles.color, n.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * n.canvas.w,
            y: t ? t.pos_y : Math.random() * n.canvas.h
        })), i == e - 1 && (n.particles.move.enable || n.fn.particlesDraw(), n.tmp.pushing = !1)
    }, n.fn.modes.removeParticles = function(e) {
        n.particles.array.splice(0, e), n.particles.move.enable || n.fn.particlesDraw()
    }, n.fn.modes.bubbleParticle = function(e) {
        if (n.interactivity.events.onhover.enable && isInArray("bubble", n.interactivity.events.onhover.mode)) {
            var t = e.x - n.interactivity.mouse.pos_x,
                i = e.y - n.interactivity.mouse.pos_y,
                r = 1 - (c = Math.sqrt(t * t + i * i)) / n.interactivity.modes.bubble.distance;

            function a() {
                e.opacity_bubble = e.opacity, e.radius_bubble = e.radius
            }
            if (c <= n.interactivity.modes.bubble.distance) {
                if (r >= 0 && "mousemove" == n.interactivity.status) {
                    if (n.interactivity.modes.bubble.size != n.particles.size.value)
                        if (n.interactivity.modes.bubble.size > n.particles.size.value) {
                            (o = e.radius + n.interactivity.modes.bubble.size * r) >= 0 && (e.radius_bubble = o)
                        } else {
                            var s = e.radius - n.interactivity.modes.bubble.size,
                                o = e.radius - s * r;
                            e.radius_bubble = o > 0 ? o : 0
                        }
                    var l;
                    if (n.interactivity.modes.bubble.opacity != n.particles.opacity.value)
                        if (n.interactivity.modes.bubble.opacity > n.particles.opacity.value)(l = n.interactivity.modes.bubble.opacity * r) > e.opacity && l <= n.interactivity.modes.bubble.opacity && (e.opacity_bubble = l);
                        else(l = e.opacity - (n.particles.opacity.value - n.interactivity.modes.bubble.opacity) * r) < e.opacity && l >= n.interactivity.modes.bubble.opacity && (e.opacity_bubble = l)
                }
            } else a();
            "mouseleave" == n.interactivity.status && a()
        } else if (n.interactivity.events.onclick.enable && isInArray("bubble", n.interactivity.events.onclick.mode)) {
            if (n.tmp.bubble_clicking) {
                t = e.x - n.interactivity.mouse.click_pos_x, i = e.y - n.interactivity.mouse.click_pos_y;
                var c = Math.sqrt(t * t + i * i),
                    u = ((new Date).getTime() - n.interactivity.mouse.click_time) / 1e3;
                u > n.interactivity.modes.bubble.duration && (n.tmp.bubble_duration_end = !0), u > 2 * n.interactivity.modes.bubble.duration && (n.tmp.bubble_clicking = !1, n.tmp.bubble_duration_end = !1)
            }

            function d(t, i, r, a, s) {
                if (t != i)
                    if (n.tmp.bubble_duration_end) null != r && (l = t + (t - (a - u * (a - t) / n.interactivity.modes.bubble.duration)), "size" == s && (e.radius_bubble = l), "opacity" == s && (e.opacity_bubble = l));
                    else if (c <= n.interactivity.modes.bubble.distance) {
                    if (null != r) var o = r;
                    else o = a;
                    if (o != t) {
                        var l = a - u * (a - t) / n.interactivity.modes.bubble.duration;
                        "size" == s && (e.radius_bubble = l), "opacity" == s && (e.opacity_bubble = l)
                    }
                } else "size" == s && (e.radius_bubble = void 0), "opacity" == s && (e.opacity_bubble = void 0)
            }
            n.tmp.bubble_clicking && (d(n.interactivity.modes.bubble.size, n.particles.size.value, e.radius_bubble, e.radius, "size"), d(n.interactivity.modes.bubble.opacity, n.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
        }
    }, n.fn.modes.repulseParticle = function(e) {
        if (n.interactivity.events.onhover.enable && isInArray("repulse", n.interactivity.events.onhover.mode) && "mousemove" == n.interactivity.status) {
            var t = e.x - n.interactivity.mouse.pos_x,
                i = e.y - n.interactivity.mouse.pos_y,
                r = Math.sqrt(t * t + i * i),
                a = t / r,
                s = i / r,
                o = clamp(1 / (c = n.interactivity.modes.repulse.distance) * (-1 * Math.pow(r / c, 2) + 1) * c * 100, 0, 50),
                l = {
                    x: e.x + a * o,
                    y: e.y + s * o
                };
            "bounce" == n.particles.move.out_mode ? (l.x - e.radius > 0 && l.x + e.radius < n.canvas.w && (e.x = l.x), l.y - e.radius > 0 && l.y + e.radius < n.canvas.h && (e.y = l.y)) : (e.x = l.x, e.y = l.y)
        } else if (n.interactivity.events.onclick.enable && isInArray("repulse", n.interactivity.events.onclick.mode))
            if (n.tmp.repulse_finish || (n.tmp.repulse_count++, n.tmp.repulse_count == n.particles.array.length && (n.tmp.repulse_finish = !0)), n.tmp.repulse_clicking) {
                var c = Math.pow(n.interactivity.modes.repulse.distance / 6, 3),
                    u = n.interactivity.mouse.click_pos_x - e.x,
                    d = n.interactivity.mouse.click_pos_y - e.y,
                    h = u * u + d * d,
                    p = -c / h * 1;
                h <= c && function() {
                    var t = Math.atan2(d, u);
                    if (e.vx = p * Math.cos(t), e.vy = p * Math.sin(t), "bounce" == n.particles.move.out_mode) {
                        var i = e.x + e.vx,
                            r = e.y + e.vy;
                        i + e.radius > n.canvas.w ? e.vx = -e.vx : i - e.radius < 0 && (e.vx = -e.vx), r + e.radius > n.canvas.h ? e.vy = -e.vy : r - e.radius < 0 && (e.vy = -e.vy)
                    }
                }()
            } else 0 == n.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
    }, n.fn.modes.grabParticle = function(e) {
        if (n.interactivity.events.onhover.enable && "mousemove" == n.interactivity.status) {
            var t = e.x - n.interactivity.mouse.pos_x,
                i = e.y - n.interactivity.mouse.pos_y,
                r = Math.sqrt(t * t + i * i);
            if (r <= n.interactivity.modes.grab.distance) {
                var a = n.interactivity.modes.grab.line_linked.opacity - r / (1 / n.interactivity.modes.grab.line_linked.opacity) / n.interactivity.modes.grab.distance;
                if (a > 0) {
                    var s = n.particles.line_linked.color_rgb_line;
                    n.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + a + ")", n.canvas.ctx.lineWidth = n.particles.line_linked.width, n.canvas.ctx.beginPath(), n.canvas.ctx.moveTo(e.x, e.y), n.canvas.ctx.lineTo(n.interactivity.mouse.pos_x, n.interactivity.mouse.pos_y), n.canvas.ctx.stroke(), n.canvas.ctx.closePath()
                }
            }
        }
    }, n.fn.vendors.eventsListeners = function() {
        "window" == n.interactivity.detect_on ? n.interactivity.el = window : n.interactivity.el = n.canvas.el, (n.interactivity.events.onhover.enable || n.interactivity.events.onclick.enable) && (n.interactivity.el.addEventListener("mousemove", function(e) {
            if (n.interactivity.el == window) var t = e.clientX,
                i = e.clientY;
            else t = e.offsetX || e.clientX, i = e.offsetY || e.clientY;
            n.interactivity.mouse.pos_x = t, n.interactivity.mouse.pos_y = i, n.tmp.retina && (n.interactivity.mouse.pos_x *= n.canvas.pxratio, n.interactivity.mouse.pos_y *= n.canvas.pxratio), n.interactivity.status = "mousemove"
        }), n.interactivity.el.addEventListener("mouseleave", function(e) {
            n.interactivity.mouse.pos_x = null, n.interactivity.mouse.pos_y = null, n.interactivity.status = "mouseleave"
        })), n.interactivity.events.onclick.enable && n.interactivity.el.addEventListener("click", function() {
            if (n.interactivity.mouse.click_pos_x = n.interactivity.mouse.pos_x, n.interactivity.mouse.click_pos_y = n.interactivity.mouse.pos_y, n.interactivity.mouse.click_time = (new Date).getTime(), n.interactivity.events.onclick.enable) switch (n.interactivity.events.onclick.mode) {
                case "push":
                    n.particles.move.enable ? n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb, n.interactivity.mouse) : 1 == n.interactivity.modes.push.particles_nb ? n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb, n.interactivity.mouse) : n.interactivity.modes.push.particles_nb > 1 && n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    n.fn.modes.removeParticles(n.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    n.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    n.tmp.repulse_clicking = !0, n.tmp.repulse_count = 0, n.tmp.repulse_finish = !1, setTimeout(function() {
                        n.tmp.repulse_clicking = !1
                    }, 1e3 * n.interactivity.modes.repulse.duration)
            }
        })
    }, n.fn.vendors.densityAutoParticles = function() {
        if (n.particles.number.density.enable) {
            var e = n.canvas.el.width * n.canvas.el.height / 1e3;
            n.tmp.retina && (e /= 2 * n.canvas.pxratio);
            var t = e * n.particles.number.value / n.particles.number.density.value_area,
                i = n.particles.array.length - t;
            i < 0 ? n.fn.modes.pushParticles(Math.abs(i)) : n.fn.modes.removeParticles(i)
        }
    }, n.fn.vendors.checkOverlap = function(e, t) {
        for (var i = 0; i < n.particles.array.length; i++) {
            var r = n.particles.array[i],
                a = e.x - r.x,
                s = e.y - r.y;
            Math.sqrt(a * a + s * s) <= e.radius + r.radius && (e.x = t ? t.x : Math.random() * n.canvas.w, e.y = t ? t.y : Math.random() * n.canvas.h, n.fn.vendors.checkOverlap(e))
        }
    }, n.fn.vendors.createSvgImg = function(e) {
        var t = n.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(t, i, n, r) {
                if (e.color.rgb) var a = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
                else a = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
                return a
            }),
            i = new Blob([t], {
                type: "image/svg+xml;charset=utf-8"
            }),
            r = window.URL || window.webkitURL || window,
            a = r.createObjectURL(i),
            s = new Image;
        s.addEventListener("load", function() {
            e.img.obj = s, e.img.loaded = !0, r.revokeObjectURL(a), n.tmp.count_svg++
        }), s.src = a
    }, n.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(n.fn.drawAnimFrame), i.remove(), pJSDom = null
    }, n.fn.vendors.drawShape = function(e, t, i, n, r, a) {
        var s = r * a,
            o = r / a,
            l = 180 * (o - 2) / o,
            c = Math.PI - Math.PI * l / 180;
        e.save(), e.beginPath(), e.translate(t, i), e.moveTo(0, 0);
        for (var u = 0; u < s; u++) e.lineTo(n, 0), e.translate(n, 0), e.rotate(c);
        e.fill(), e.restore()
    }, n.fn.vendors.exportImg = function() {
        window.open(n.canvas.el.toDataURL("image/png"), "_blank")
    }, n.fn.vendors.loadImg = function(e) {
        if (n.tmp.img_error = void 0, "" != n.particles.shape.image.src)
            if ("svg" == e) {
                var t = new XMLHttpRequest;
                t.open("GET", n.particles.shape.image.src), t.onreadystatechange = function(e) {
                    4 == t.readyState && (200 == t.status ? (n.tmp.source_svg = e.currentTarget.response, n.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), n.tmp.img_error = !0))
                }, t.send()
            } else {
                var i = new Image;
                i.addEventListener("load", function() {
                    n.tmp.img_obj = i, n.fn.vendors.checkBeforeDraw()
                }), i.src = n.particles.shape.image.src
            }
        else console.log("Error pJS - No image.src"), n.tmp.img_error = !0
    }, n.fn.vendors.draw = function() {
        "image" == n.particles.shape.type ? "svg" == n.tmp.img_type ? n.tmp.count_svg >= n.particles.number.value ? (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : null != n.tmp.img_obj ? (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame))
    }, n.fn.vendors.checkBeforeDraw = function() {
        "image" == n.particles.shape.type ? "svg" == n.tmp.img_type && null == n.tmp.source_svg ? n.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(n.tmp.checkAnimFrame), n.tmp.img_error || (n.fn.vendors.init(), n.fn.vendors.draw())) : (n.fn.vendors.init(), n.fn.vendors.draw())
    }, n.fn.vendors.init = function() {
        n.fn.retinaInit(), n.fn.canvasInit(), n.fn.canvasSize(), n.fn.canvasPaint(), n.fn.particlesCreate(), n.fn.vendors.densityAutoParticles(), n.particles.line_linked.color_rgb_line = hexToRgb(n.particles.line_linked.color)
    }, n.fn.vendors.start = function() {
        isInArray("image", n.particles.shape.type) ? (n.tmp.img_type = n.particles.shape.image.src.substr(n.particles.shape.image.src.length - 3), n.fn.vendors.loadImg(n.tmp.img_type)) : n.fn.vendors.checkBeforeDraw()
    }, n.fn.vendors.eventsListeners(), n.fn.vendors.start()
};

function hexToRgb(e) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, i, n) {
        return t + t + i + i + n + n
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null
}

function clamp(e, t, i) {
    return Math.min(Math.max(e, t), i)
}

function isInArray(e, t) {
    return t.indexOf(e) > -1
}
Object.deepExtend = function(e, t) {
        for (var i in t) t[i] && t[i].constructor && t[i].constructor === Object ? (e[i] = e[i] || {}, arguments.callee(e[i], t[i])) : e[i] = t[i];
        return e
    }, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function(e, t) {
        "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
        var i = document.getElementById(e),
            n = "particles-js-canvas-el",
            r = i.getElementsByClassName(n);
        if (r.length)
            for (; r.length > 0;) i.removeChild(r[0]);
        var a = document.createElement("canvas");
        a.className = n, a.style.width = "100%", a.style.height = "100%", null != document.getElementById(e).appendChild(a) && pJSDom.push(new pJS(e, t))
    }, window.particlesJS.load = function(e, t, i) {
        var n = new XMLHttpRequest;
        n.open("GET", t), n.onreadystatechange = function(t) {
            if (4 == n.readyState)
                if (200 == n.status) {
                    var r = JSON.parse(t.currentTarget.response);
                    window.particlesJS(e, r), i && i()
                } else console.log("Error pJS - XMLHttpRequest status: " + n.status), console.log("Error pJS - File config not found")
        }, n.send()
    },
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Typed = t() : e.Typed = t()
    }(this, function() {
        return function(e) {
            var t = {};

            function i(n) {
                if (t[n]) return t[n].exports;
                var r = t[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return e[n].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
            }
            return i.m = e, i.c = t, i.p = "", i(0)
        }([function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }();
            var r = i(1),
                a = i(3),
                s = function() {
                    function e(t, i) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), r.initializer.load(this, i, t), this.begin()
                    }
                    return n(e, [{
                        key: "toggle",
                        value: function() {
                            this.pause.status ? this.start() : this.stop()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.reset(!1), this.options.onDestroy(this)
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, e && (this.insertCursor(), this.options.onReset(this), this.begin())
                        }
                    }, {
                        key: "begin",
                        value: function() {
                            var e = this;
                            this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
                                e.currentElContent && 0 !== e.currentElContent.length ? e.backspace(e.currentElContent, e.currentElContent.length) : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                            }, this.startDelay)
                        }
                    }, {
                        key: "typewrite",
                        value: function(e, t) {
                            var i = this;
                            this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                            var n = this.humanizer(this.typeSpeed),
                                r = 1;
                            !0 !== this.pause.status ? this.timeout = setTimeout(function() {
                                t = a.htmlParser.typeHtmlChars(e, t, i);
                                var n = 0,
                                    s = e.substr(t);
                                if ("^" === s.charAt(0) && /^\^\d+/.test(s)) {
                                    var o = 1;
                                    o += (s = /\d+/.exec(s)[0]).length, n = parseInt(s), i.temporaryPause = !0, i.options.onTypingPaused(i.arrayPos, i), e = e.substring(0, t) + e.substring(t + o), i.toggleBlinking(!0)
                                }
                                if ("`" === s.charAt(0)) {
                                    for (;
                                        "`" !== e.substr(t + r).charAt(0) && !(t + ++r > e.length););
                                    var l = e.substring(0, t),
                                        c = e.substring(l.length + 1, t + r),
                                        u = e.substring(t + r + 1);
                                    e = l + c + u, r--
                                }
                                i.timeout = setTimeout(function() {
                                    i.toggleBlinking(!1), t === e.length ? i.doneTyping(e, t) : i.keepTyping(e, t, r), i.temporaryPause && (i.temporaryPause = !1, i.options.onTypingResumed(i.arrayPos, i))
                                }, n)
                            }, n) : this.setPauseStatus(e, t, !0)
                        }
                    }, {
                        key: "keepTyping",
                        value: function(e, t, i) {
                            0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), t += i;
                            var n = e.substr(0, t);
                            this.replaceText(n), this.typewrite(e, t)
                        }
                    }, {
                        key: "doneTyping",
                        value: function(e, t) {
                            var i = this;
                            this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                                i.backspace(e, t)
                            }, this.backDelay))
                        }
                    }, {
                        key: "backspace",
                        value: function(e, t) {
                            var i = this;
                            if (!0 !== this.pause.status) {
                                if (this.fadeOut) return this.initFadeOut();
                                this.toggleBlinking(!1);
                                var n = this.humanizer(this.backSpeed);
                                this.timeout = setTimeout(function() {
                                    t = a.htmlParser.backSpaceHtmlChars(e, t, i);
                                    var n = e.substr(0, t);
                                    if (i.replaceText(n), i.smartBackspace) {
                                        var r = i.strings[i.arrayPos + 1];
                                        r && n === r.substr(0, t) ? i.stopNum = t : i.stopNum = 0
                                    }
                                    t > i.stopNum ? (t--, i.backspace(e, t)) : t <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.options.onLastStringBackspaced(), i.shuffleStringsIfNeeded(), i.begin()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], t))
                                }, n)
                            } else this.setPauseStatus(e, t, !0)
                        }
                    }, {
                        key: "complete",
                        value: function() {
                            this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                        }
                    }, {
                        key: "setPauseStatus",
                        value: function(e, t, i) {
                            this.pause.typewrite = i, this.pause.curString = e, this.pause.curStrPos = t
                        }
                    }, {
                        key: "toggleBlinking",
                        value: function(e) {
                            if (this.cursor && !this.pause.status && this.cursorBlinking !== e) {
                                this.cursorBlinking = e;
                                var t = e ? "infinite" : 0;
                                this.cursor.style.animationIterationCount = t
                            }
                        }
                    }, {
                        key: "humanizer",
                        value: function(e) {
                            return Math.round(Math.random() * e / 2) + e
                        }
                    }, {
                        key: "shuffleStringsIfNeeded",
                        value: function() {
                            this.shuffle && (this.sequence = this.sequence.sort(function() {
                                return Math.random() - .5
                            }))
                        }
                    }, {
                        key: "initFadeOut",
                        value: function() {
                            var e = this;
                            return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                                e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0)
                            }, this.fadeOutDelay)
                        }
                    }, {
                        key: "replaceText",
                        value: function(e) {
                            this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
                        }
                    }, {
                        key: "bindFocusEvents",
                        value: function() {
                            var e = this;
                            this.isInput && (this.el.addEventListener("focus", function(t) {
                                e.stop()
                            }), this.el.addEventListener("blur", function(t) {
                                e.el.value && 0 !== e.el.value.length || e.start()
                            }))
                        }
                    }, {
                        key: "insertCursor",
                        value: function() {
                            this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                        }
                    }]), e
                }();
            t.default = s, e.exports = t.default
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                },
                r = function() {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t
                    }
                }();
            var a, s = i(2),
                o = (a = s) && a.__esModule ? a : {
                    default: a
                },
                l = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    return r(e, [{
                        key: "load",
                        value: function(e, t, i) {
                            if (e.el = "string" == typeof i ? document.querySelector(i) : i, e.options = n({}, o.default, t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function(e) {
                                    return e.trim()
                                }), "string" == typeof e.options.stringsElement ? e.stringsElement = document.querySelector(e.options.stringsElement) : e.stringsElement = e.options.stringsElement, e.stringsElement) {
                                e.strings = [], e.stringsElement.style.display = "none";
                                var r = Array.prototype.slice.apply(e.stringsElement.children),
                                    a = r.length;
                                if (a)
                                    for (var s = 0; s < a; s += 1) {
                                        var l = r[s];
                                        e.strings.push(l.innerHTML.trim())
                                    }
                            }
                            for (var s in e.strPos = 0, e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.sequence = [], e.pause = {
                                    status: !1,
                                    typewrite: !0,
                                    curString: "",
                                    curStrPos: 0
                                }, e.typingComplete = !1, e.strings) e.sequence[s] = s;
                            e.currentElContent = this.getCurrentElContent(e), e.autoInsertCss = e.options.autoInsertCss, this.appendAnimationCss(e)
                        }
                    }, {
                        key: "getCurrentElContent",
                        value: function(e) {
                            return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
                        }
                    }, {
                        key: "appendAnimationCss",
                        value: function(e) {
                            if (e.autoInsertCss && e.showCursor && e.fadeOut) {
                                var t = document.createElement("style");
                                t.type = "text/css";
                                var i = "";
                                e.showCursor && (i += "\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), e.fadeOut && (i += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "), 0 !== t.length && (t.innerHTML = i, document.head.appendChild(t))
                            }
                        }
                    }]), e
                }();
            t.default = l;
            var c = new l;
            t.initializer = c
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                stringsElement: null,
                typeSpeed: 0,
                startDelay: 0,
                backSpeed: 0,
                smartBackspace: !0,
                shuffle: !1,
                backDelay: 700,
                fadeOut: !1,
                fadeOutClass: "typed-fade-out",
                fadeOutDelay: 500,
                loop: !1,
                loopCount: 1 / 0,
                showCursor: !0,
                cursorChar: "|",
                autoInsertCss: !0,
                attr: null,
                bindInputFocusEvents: !1,
                contentType: "html",
                onComplete: function(e) {},
                preStringTyped: function(e, t) {},
                onStringTyped: function(e, t) {},
                onLastStringBackspaced: function(e) {},
                onTypingPaused: function(e, t) {},
                onTypingResumed: function(e, t) {},
                onReset: function(e) {},
                onStop: function(e, t) {},
                onStart: function(e, t) {},
                onDestroy: function(e) {}
            };
            t.default = i, e.exports = t.default
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }();
            var n = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return i(e, [{
                    key: "typeHtmlChars",
                    value: function(e, t, i) {
                        if ("html" !== i.contentType) return t;
                        var n = e.substr(t).charAt(0);
                        if ("<" === n || "&" === n) {
                            var r = "";
                            for (r = "<" === n ? ">" : ";"; e.substr(t + 1).charAt(0) !== r && !(++t + 1 > e.length););
                            t++
                        }
                        return t
                    }
                }, {
                    key: "backSpaceHtmlChars",
                    value: function(e, t, i) {
                        if ("html" !== i.contentType) return t;
                        var n = e.substr(t).charAt(0);
                        if (">" === n || ";" === n) {
                            var r = "";
                            for (r = ">" === n ? "<" : "&"; e.substr(t - 1).charAt(0) !== r && !(--t < 0););
                            t--
                        }
                        return t
                    }
                }]), e
            }();
            t.default = n;
            var r = new n;
            t.htmlParser = r
        }])
    });