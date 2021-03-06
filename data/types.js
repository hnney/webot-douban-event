
var types = {
  "1001": "小型现场|live",
  "1002": "音乐会",
  "1003": "演唱会",
  "1004": "音乐节",
  "1101": "话剧",
  "1102": "音乐剧",
  "1103": "舞剧",
  "1104": "歌剧",
  "1105": "戏曲",
  "1401": "生活",
  "1402": "集市",
  "1403": "摄影",
  "1404": "外语",
  "1405": "桌游",
  "1406": "夜店",
  "1407": "交友",
  "1801": "主题放映",
  "1802": "影展",
  "1803": "影院活动",
  "all": "所有|全部",
  "salon": "讲座|沙龙|salon",
  "others": "其他",
  "film": "电影|观影|movie",
  "commonweal": "公益",
  "travel": "旅行|旅游|出游",
  "sports": "运动|体育|sport",
  "drama": "戏剧(?!节|(艺术?)中心)|舞台剧|话剧|drama",
  "music": "音乐(?!堂|节|厅)|演出|music",
  "exhibition": "展览|展览会|会展|exhibition",
  "party": "聚会|交友|party"
};

for (var k in types) {
  var val = types[k];
  types[k] = {
    'reg': new RegExp(val, 'i'),
    'name': val.split('|')[0].replace(/\(.*\)/g, ''),
    'id': k
  }
}

module.exports = types;
