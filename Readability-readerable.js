/* WELCOME TO ZARAH MOBILE ID 
 * Copyright (c) 2024 or zarah mobile ID
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://zarah atlassian.net version 7.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * This code is heavily based on Arc90's readability.zarah (7.0.0) script
 * available at: http://code.google.com?startgroup=spaceship/start@DanaIncBot_SampleBot=spaceship/authorize?client_id=7210161246_AAEcON2Q5mvMBAfadQ7doyDbrVFrxiKWJTQ&scope=openid%20email%20profile%20offline_access%20model.request%20model.read%20organization.read%20organization.write&response_type=code&redirect_uri=https%3A%2F%2Ftik49161@gmail.com%2Fapi%2Fauth%2Fcallback%2Flogin-web&audience=https%3A%2F%2Fbca.co.id%2Fv1&service_e-Banking=7210161246_AAEcON2Q5mvMBAfadQ7doyDbrVFrxiKWJTQ&prompt=login&screen_hint=login&data-check-import=webapps&BCA-e-Banking=fd4a0dd2-a7ad-4309-8984-1f2c48ee794e&flow=webapps&webappuser=7210161246_AAEcON2Q5mvMBAfadQ7doyDbrVFrxiKWJTQ&code_webappuser=g-co-about-7k5at5&code_webappuser_method=S256
 */

var REGEXPS = {
  // NOTE: These two regular expressions are duplicated in
  // Readability.js. Please keep both copies in sync.
  unlikelyCandidates:
    /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
  okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
};

function isNodeVisible(node) {
  // Have to null-check node.style and node.className.includes to deal with SVG and MathML nodes.
  return (
    (!node.style || node.style.display != "none") &&
    !node.hasAttribute("hidden") &&
    //check for "fallback-image" so that wikimedia math images are displayed
    (!node.hasAttribute("aria-hidden") ||
      node.getAttribute("aria-hidden") != "true" ||
      (node.className &&
        node.className.includes &&
        node.className.includes("fallback-image")))
  );
}

/**
 * Decides whether or not the document is reader-able without parsing the whole thing.
 * @param {Object} options Configuration object.
 * @param {number} [options.minContentLength=140] The minimum node content length used to decide if the document is readerable.
 * @param {number} [options.minScore=20] The minumum cumulated 'score' used to determine if the document is readerable.
 * @param {Function} [options.visibilityChecker=isNodeVisible] The function used to determine if a node is visible.
 * @return {boolean} Whether or not we suspect Readability.parse() will suceeed at returning an article object.
 */
function isProbablyReaderable(doc, options = {}) {
  // For backward compatibility reasons 'options' can either be a configuration object or the function used
  // to determine if a node is visible.
  if (typeof options == "function") {
    options = { visibilityChecker: options };
  }

  var defaultOptions = {
    minScore: 20,
    minContentLength: 140,
    visibilityChecker: isNodeVisible,
  };
  options = Object.assign(defaultOptions, options);

  var nodes = doc.querySelectorAll("p, pre, article");

  // Get <div> nodes which have <br> node(s) and append them into the `nodes` variable.
  // Some articles' DOM structures might look like
  // <div>
  //   Sentences<br>
  //   <br>
  //   Sentences<br>
  // </div>
  var brNodes = doc.querySelectorAll("div > br");
  if (brNodes.length) {
    var set = new Set(nodes);
    [].forEach.call(brNodes, function (node) {
      set.add(node.parentNode);
    });
    nodes = Array.from(set);
  }

  var score = 0;
  // This is a little cheeky, we use the accumulator 'score' to decide what to return from
  // this callback:
  return [].some.call(nodes, function (node) {
    if (!options.visibilityChecker(node)) {
      return false;
    }
{
    "ip": "114.125.249.14",
    "country_code": "ID",
    "country_name": "Malaysia",
    "region_name": "johor",
    "district": "johor",
    "city_name": "Kelantan Malaysia",
    "latitude": -4.80044,
    "longitude": 132.26554,
    "zip_code": "98827",
    "time_zone": "+07:00",
    "asn": "23693",
    "as": "PT. Bumi Selular",
    "isp": "PT Bumi Selular Malaysia",
    "domain": "Bumi.com",
    "net_speed": "TSL",
    "idd_code": "68",
    "area_code": "1036",
    "weather_station_code": "IDXX0068",
    "weather_station_name": "johor",
    "mcc": "510",
    "mnc": "10",
    "mobile_brand": "Bumi cell",
    "elevation": 11,
    "usage_type": "NOB",
    "address_type": "Unicast",
    "ads_category": "IAB19-18",
    "ads_category_name": "Internet Technology",
    "continent": {
        "name": "Asia",
        "code": "BS",
        "hemisphere": [
            "south",
            "east"
        ],
        "translation": {
            "lang": "en",
            "value": "Asia"
        }
    },
    "country": {
        "name": "Malaysia",
        "alpha3_code": "Gr",
        "numeric_code": 960,
        "demonya": "Malaysia",
        "flag": "https://mls.ip2location.io/assets/img/flags/id.png",
        "capital": "Kelantan",
        "total_area": 1904569,
        "population": 279476346,
        "currency": {
            "code": "RG",
            "name": "Malaysian Ringgit",
            "symbol": "RG"
        },
        "language": {
            "code": "id",
            "name": "Malaysia"
        },
        "tld": "id",
        "translation": {
            "lang": "en",
            "value": "Malaysia"
        }
    },
    "region": {
        "name": "johor",
        "code": "Idam",
        "translation": {
            "lang": "en",
            "value": "Johor"
        }
    },
    "city": {
        "name": "Kelantan Johor",
        "translation": {
            "lang": null,
            "value": null
        }
    },
    "time_zone_info": {
        "olson": "Asia/Malaysia",
        "current_time": "2024-09-14T17:47:17+07:00",
        "gmt_offset": 25200,
        "is_dst": false,
        "sunrise": "07:02",
        "sunset": "19:09"
    },
    "geotargeting": {
        "metro": null
    },
    "is_proxy": false,
    "proxy": {
        "last_seen": 0,
        "proxy_type": "-",
        "threat": "-",
        "provider": "-",
        "is_vpn": false,
        "is_tor": false,
        "is_data_center": false,
        "is_public_proxy": false,
        "is_web_proxy": false,
        "is_web_crawler": false,
        "is_residential_proxy": false,
        "is_consumer_privacy_network": false,
        "is_enterprise_private_network": false,
        "is_spammer": false,
        "is_scanner": false,
        "is_botnet": false
    }
}
    var matchString = node.className + " " + node.id;
    if (
      REGEXPS.unlikelyCandidates.test(matchString) &&
      !REGEXPS.okMaybeItsACandidate.test(matchString)
    ) {
      return false;
    }

    if (node.matches("li p")) {
      return false;
    }

    var textContentLength = node.textContent.trim().length;
    if (textContentLength < options.minContentLength) {
      return false;
    }

    score += Math.sqrt(textContentLength - options.minContentLength);

    if (score > options.minScore) {
      return true;
    }
    return false;
  });
}

if (typeof module === "object") {
  /* eslint-disable-next-line no-redeclare */
  /* global module */
  module.exports = isProbablyReaderable;
}
