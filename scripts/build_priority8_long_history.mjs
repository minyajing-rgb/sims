import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const recentPath = path.join(root, '01_watchlist', 'DIANDIAN_19_GAMES_MONTHLY_2025-09_2026-08.csv');
const outPath = path.join(root, '01_watchlist', 'DIANDIAN_PRIORITY8_MONTHLY_2021-09_2026-08.csv');
const summaryPath = path.join(root, '01_watchlist', 'DIANDIAN_PRIORITY8_SUMMARY_2026-09-24.csv');

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (c === '"') {
        quoted = false;
      } else {
        field += c;
      }
    } else if (c === '"') {
      quoted = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n') {
      row.push(field.replace(/\r$/, ''));
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += c;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  const [header, ...body] = rows;
  return body.filter((r) => r.some(Boolean)).map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ''])));
}

function csvEscape(value) {
  const s = value === null || value === undefined ? '' : String(value);
  return /[",\n]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
}

function writeCsv(filePath, rows, columns) {
  const lines = [columns.join(',')];
  for (const row of rows) lines.push(columns.map((c) => csvEscape(row[c] ?? '')).join(','));
  fs.writeFileSync(filePath, `${lines.join('\n')}\n`);
}

function parseSeries(text) {
  const values = new Map();
  for (const token of text.trim().split(/\s+/)) {
    const [ym, raw] = token.split(':');
    if (!ym || !raw) continue;
    values.set(`${ym.slice(0, 4)}-${ym.slice(4)}`, Number(raw));
  }
  return values;
}

function num(value) {
  if (value === undefined || value === null || value === '' || value === 'n.a.') return null;
  const parsed = Number(String(value).replaceAll(',', ''));
  return Number.isFinite(parsed) ? parsed : null;
}

function fmt(value) {
  return value === null || value === undefined || !Number.isFinite(value) ? 'n.a.' : String(value);
}

function monthRange(start, end) {
  const out = [];
  let [y, m] = start.split('-').map(Number);
  const [ey, em] = end.split('-').map(Number);
  while (y < ey || (y === ey && m <= em)) {
    out.push(`${y}-${String(m).padStart(2, '0')}`);
    m += 1;
    if (m === 13) { y += 1; m = 1; }
  }
  return out;
}

const games = [
  { name: 'Gossip Harbor', recent: '浪漫餐厅 / Gossip Harbor', start: '2022-07', launch: '2022-07', scope: 'Diandian product collection' },
  { name: 'Township', recent: 'Township', start: '2021-09', launch: '2013-11', scope: 'Diandian product collection' },
  { name: 'Hay Day', recent: 'Hay Day', start: '2021-09', launch: '2012-06', scope: 'Diandian product collection' },
  { name: 'Big Farm Homestead', recent: 'Big Farm Homestead', start: '2025-11', launch: '2025-11', scope: 'Diandian product collection' },
  { name: 'The Cozy Florist', recent: 'The Cozy Florist', start: '2025-12', launch: '2025-12', scope: 'Diandian product collection' },
  { name: 'Office Cat', recent: 'Office Cat', start: '2024-02', launch: '2024-02', scope: 'Diandian product collection' },
  { name: 'My Perfect Hotel', recent: 'My Perfect Hotel', start: '2022-04', launch: '2022-04', scope: 'Diandian product collection' },
  { name: 'Heartopia', recent: 'Heartopia', start: '2024-07', launch: '2024-07 CN / 2026-01 Global', scope: 'mixed' },
];

// Values below were read from the authenticated Diandian monthly table on 2026-09-24.
// The picker accepted 2021-09..2026-08. The default 50-row table page showed a total
// plus 49 months; switching the table to 100 rows revealed the full 60-month series.
// These strings only add months older than the existing verified 2025-09..2026-08 dataset.
const series = {
  'Township|downloads': parseSeries(`
    202508:7747363 202507:6761491 202506:5550059 202505:6887372 202504:7935025 202503:8761201 202502:8360885 202501:10582318
    202412:9483187 202411:7867495 202410:6657993 202409:7132313 202408:7202411 202407:6886954 202406:5798886 202405:6992241 202404:7082111 202403:8464944 202402:6485167 202401:6527508
    202312:6666742 202311:6642899 202310:4761477 202309:5480736 202308:4111717 202307:3317619 202306:4625997 202305:4895597 202304:4755923 202303:6847090 202302:10012210 202301:8329388
    202212:7390870 202211:7902053 202210:9259173 202209:9356934 202208:7409028 202207:6848568 202206:4646817 202205:5332314 202204:5637799 202203:5422279 202202:3739461 202201:5583725
    202112:3369813 202111:3754685 202110:5017533 202109:5171534`),
  'Township|revenue': parseSeries(`
    202508:31889431 202507:31300233 202506:29145466 202505:30929208 202504:32102203 202503:33090923 202502:29787069 202501:35094151
    202412:32978771 202411:31416338 202410:31825913 202409:31864354 202408:30391890 202407:29525553 202406:26908197 202405:28947140 202404:27990666 202403:30095052 202402:26929041 202401:30808834
    202312:31132418 202311:28592720 202310:29984754 202309:29133376 202308:29222391 202307:29620694 202306:31407155 202305:30243164 202304:32465475 202303:33928723 202302:30850691 202301:33640704
    202212:34931895 202211:31333971 202210:32837617 202209:29690057 202208:26571193 202207:24378271 202206:24739531 202205:25237692 202204:24722378 202203:22133668 202202:22699060 202201:20827917
    202112:24176493 202111:25349595 202110:24490547 202109:23209108`),
  'Hay Day|downloads': parseSeries(`
    202508:2377555 202507:2369914 202506:2478414 202505:2338938 202504:2457184 202503:2674428 202502:2607130 202501:2560450
    202412:2447608 202411:2485665 202410:2143209 202409:2368560 202408:2611092 202407:3247234 202406:3913298 202405:3685784 202404:2650172 202403:2865231 202402:2745546 202401:2704985
    202312:3442154 202311:2530488 202310:2593182 202309:2364762 202308:1895444 202307:2040062 202306:2254648 202305:3382663 202304:4122161 202303:4371343 202302:5595079 202301:4692633
    202212:2221075 202211:1932665 202210:2255382 202209:2179552 202208:2767705 202207:2369719 202206:2301427 202205:2426397 202204:3008110 202203:3885059 202202:3811036 202201:3114011
    202112:2393749 202111:2232400 202110:2576095 202109:2549825`),
  'Hay Day|revenue': parseSeries(`
    202508:11248776 202507:11071659 202506:11315197 202505:11204080 202504:11272195 202503:11026008 202502:10111026 202501:9434455
    202412:9961171 202411:8958311 202410:9787419 202409:9465339 202408:9409956 202407:9989269 202406:10110224 202405:9614321 202404:9312795 202403:9840228 202402:9633319 202401:9321526
    202312:9815348 202311:8582731 202310:8862119 202309:8378192 202308:8077737 202307:7872935 202306:9595079 202305:9393943 202304:10489357 202303:10840337 202302:9806984 202301:9743014
    202212:10603096 202211:8911429 202210:9253488 202209:8925261 202208:10047139 202207:9685699 202206:10753689 202205:10113186 202204:10677481 202203:11222509 202202:10123275 202201:10499607
    202112:10864964 202111:10009894 202110:9875671 202109:9424556`),
  'Gossip Harbor|downloads': parseSeries(`
    202508:7281820 202507:8033876 202506:4638719 202505:5103281 202504:4518091 202503:4339400 202502:4019675 202501:5154056
    202412:2902449 202411:2493615 202410:2582800 202409:2591830 202408:2350564 202407:2290623 202406:2111664 202405:2162425 202404:1839576 202403:1825126 202402:1669111 202401:1065350
    202312:573581 202311:718798 202310:684498 202309:889426 202308:848535 202307:589851 202306:507550 202305:412820 202304:248970 202303:279061 202302:338991 202301:393186
    202212:418718 202211:424019 202210:658793 202209:558324 202208:1413401 202207:1000400`),
  'Gossip Harbor|revenue': parseSeries(`
    202508:46595413 202507:42083775 202506:39036009 202505:37587933 202504:34336716 202503:32916845 202502:27724092 202501:29156698
    202412:28058567 202411:22449132 202410:22006363 202409:18469499 202408:16093680 202407:14116558 202406:12851100 202405:11718816 202404:10493135 202403:11034908 202402:8460866 202401:7114238
    202312:7275350 202311:6696509 202310:6759997 202309:6019262 202308:5728700 202307:5207345 202306:5079990 202305:4603193 202304:4268998 202303:4148614 202302:3356848 202301:3491408
    202212:3003720 202211:2552749 202210:2440209 202209:1474632 202208:1964677 202207:487200`),
  'Office Cat|downloads': parseSeries(`
    202508:447629 202507:525863 202506:800817 202505:763265 202504:584927 202503:736998 202502:765406 202501:1119991
    202412:1246340 202411:1423215 202410:1727171 202409:2031645 202408:2185931 202407:2706600 202406:1006505 202405:1526883 202404:25785 202403:20389 202402:5603`),
  'Office Cat|revenue': parseSeries(`
    202508:555937 202507:621627 202506:753398 202505:976697 202504:1078478 202503:1300489 202502:1527953 202501:1780173
    202412:1725876 202411:1915190 202410:2426122 202409:2193509 202408:1944665 202407:1833253 202406:819578 202405:662783 202404:4392 202403:4533 202402:578`),
  'My Perfect Hotel|downloads': parseSeries(`
    202508:5765889 202507:5993155 202506:5741429 202505:5857899 202504:6730716 202503:8655620 202502:7125046 202501:8426635
    202412:6527171 202411:5037537 202410:5819900 202409:5789037 202408:8352545 202407:9159333 202406:10155500 202405:8470554 202404:8235164 202403:8236013 202402:9336846 202401:12975535
    202312:12447421 202311:14091602 202310:17400151 202309:18427074 202308:13550405 202307:2515112 202306:2730177 202305:2759518 202304:4269605 202303:2680710 202302:2992505 202301:6004584
    202212:6288675 202211:6462055 202210:6139099 202209:7152228 202208:5490140 202207:67454 202206:14396 202205:6466 202204:3788`),
  'My Perfect Hotel|revenue': parseSeries(`
    202508:564256 202507:520564 202506:476579 202505:492320 202504:492579 202503:682688 202502:624584 202501:757240
    202412:677420 202411:760719 202410:823786 202409:711466 202408:907272 202407:946443 202406:1031167 202405:628448 202404:617086 202403:755868 202402:783571 202401:1253337
    202312:987964 202311:1138720 202310:1401582 202309:1742465 202308:1261259 202307:156040 202306:134286 202305:97605 202304:151446 202303:172336 202302:184569 202301:296556
    202212:334363 202211:349379 202210:329127 202209:313167 202208:137129`),
  'Heartopia|revenue': parseSeries(`
    202508:1718537 202507:3291712 202506:2001670 202505:1611729 202504:1928687 202503:1326710 202502:1163911 202501:2052246
    202412:1524780 202411:1542167 202410:1438967 202409:3816270 202408:3540074 202407:1744277`),
};

const recentRows = parseCsv(fs.readFileSync(recentPath, 'utf8'));
const recentByKey = new Map(recentRows.map((r) => [`${r.product_family}|${r.month}`, r]));
const output = [];

for (const game of games) {
  const downloads = new Map(series[`${game.name}|downloads`] ?? []);
  const revenue = new Map(series[`${game.name}|revenue`] ?? []);
  for (const month of monthRange('2025-09', '2026-08')) {
    const existing = recentByKey.get(`${game.recent}|${month}`);
    if (!existing) continue;
    const d = num(existing.total_downloads);
    const r = num(existing.revenue_usd);
    if (d !== null) downloads.set(month, d);
    if (r !== null) revenue.set(month, r);
  }

  const months = monthRange(game.start, '2026-08');
  const downloadPeak = Math.max(...downloads.values());
  const revenuePeak = Math.max(...revenue.values());
  const sameScope = game.scope !== 'mixed';

  for (let i = 0; i < months.length; i += 1) {
    const month = months[i];
    const d = downloads.get(month) ?? null;
    const r = revenue.get(month) ?? null;
    const existing = recentByKey.get(`${game.recent}|${month}`);
    const dpr = d === null ? null : d / downloadPeak;
    const rpr = r === null ? null : r / revenuePeak;
    const trailingRevenue = months.slice(Math.max(0, i - 2), i + 1).map((m) => revenue.get(m));
    const carry = trailingRevenue.length === 3 && trailingRevenue.every((v) => v !== undefined)
      ? trailingRevenue.reduce((a, b) => a + b, 0) / 3 / revenuePeak
      : null;
    const heartopiaBeforeGlobal = game.name === 'Heartopia' && month < '2025-12';
    output.push({
      product_family: game.name,
      month,
      total_downloads: fmt(d),
      ios_downloads: existing?.ios_downloads || 'n.a.',
      google_play_downloads: existing?.google_play_downloads || 'n.a.',
      revenue_usd: fmt(r),
      paid_downloads_proxy: 'n.a.',
      organic_downloads: 'n.a.',
      organic_share: 'n.a.',
      top_5_countries: existing?.top_5_countries || 'n.a.',
      ad_creative_count: 'n.a.',
      rating: existing?.rating || 'n.a.',
      review_count: existing?.review_count || 'n.a.',
      major_version: existing?.major_version || 'n.a.',
      liveops_event: 'n.a.',
      ip_collab: 'n.a.',
      organic_paid_ratio: 'n.a.',
      rpd_usd: sameScope && d && r !== null ? r / d : 'n.a.',
      download_peak_ratio: fmt(dpr),
      revenue_peak_ratio: fmt(rpr),
      revenue_persistence: sameScope && dpr && rpr !== null ? rpr / dpr : 'n.a.',
      '3m_revenue_carryover': fmt(carry),
      download_scope: game.name === 'Heartopia' ? 'Global iOS+Google Play' : game.scope,
      revenue_scope: game.name === 'Heartopia' ? 'Diandian product collection including regional entities' : game.scope,
      data_status: game.name === 'Heartopia'
        ? `verified_visible_table;scope_mismatch${heartopiaBeforeGlobal ? ';downloads_not_applicable_before_global_launch' : ''}`
        : 'verified_visible_table;same_scope',
      source_url: existing?.source_url || sourceFor(game.name),
      notes: game.name === 'Heartopia'
        ? 'Global downloads and collection-scope revenue are not comparable; RPD and cross-scope persistence are intentionally N/A.'
        : 'Diandian authenticated monthly table. Picker requested 2021-09..2026-08; output starts at first rendered month or product launch.',
    });
  }
}

function sourceFor(name) {
  const slugs = {
    'Gossip Harbor': 'yedipu8p7819ir4', Township: 'pn3qiru8j95ligy', 'Hay Day': 'ky58i5u6ekqvb7y',
    'Big Farm Homestead': 'nldiru05oqpqbq4', 'The Cozy Florist': 'nwoiwu7wgjzjsr4',
    'Office Cat': 'yedipu8dp09qfr4', 'My Perfect Hotel': '4v2imuppkwe6igy', Heartopia: '4v2imue5rkzetgy',
  };
  const slug = slugs[name];
  return `https://app.diandian.com/app/${slug}/googleplay-downloads | https://app.diandian.com/app/${slug}/googleplay-income`;
}

const columns = [
  'product_family', 'month', 'total_downloads', 'ios_downloads', 'google_play_downloads', 'revenue_usd',
  'paid_downloads_proxy', 'organic_downloads', 'organic_share', 'top_5_countries', 'ad_creative_count',
  'rating', 'review_count', 'major_version', 'liveops_event', 'ip_collab', 'organic_paid_ratio', 'rpd_usd',
  'download_peak_ratio', 'revenue_peak_ratio', 'revenue_persistence', '3m_revenue_carryover',
  'download_scope', 'revenue_scope', 'data_status', 'source_url', 'notes',
];
writeCsv(outPath, output, columns);

const summaries = games.map((game) => {
  const rows = output.filter((r) => r.product_family === game.name);
  const dRows = rows.filter((r) => num(r.total_downloads) !== null);
  const rRows = rows.filter((r) => num(r.revenue_usd) !== null);
  const dPeak = dRows.reduce((a, b) => num(a.total_downloads) >= num(b.total_downloads) ? a : b);
  const rPeak = rRows.reduce((a, b) => num(a.revenue_usd) >= num(b.revenue_usd) ? a : b);
  const latestD = dRows.at(-1);
  const latestR = rRows.at(-1);
  return {
    product_family: game.name,
    source_launch_month: game.launch,
    visible_start_month: rows[0].month,
    visible_end_month: rows.at(-1).month,
    visible_month_count: rows.length,
    download_month_count: dRows.length,
    revenue_month_count: rRows.length,
    download_total_visible: dRows.reduce((s, r) => s + num(r.total_downloads), 0),
    download_peak_month: dPeak.month,
    download_peak: dPeak.total_downloads,
    latest_downloads: latestD?.total_downloads ?? 'n.a.',
    revenue_total_visible_usd: rRows.reduce((s, r) => s + num(r.revenue_usd), 0),
    revenue_peak_month: rPeak.month,
    revenue_peak_usd: rPeak.revenue_usd,
    latest_revenue_usd: latestR?.revenue_usd ?? 'n.a.',
    latest_download_vs_peak: latestD ? num(latestD.total_downloads) / num(dPeak.total_downloads) : 'n.a.',
    latest_revenue_vs_peak: latestR ? num(latestR.revenue_usd) / num(rPeak.revenue_usd) : 'n.a.',
    scope_note: game.name === 'Heartopia' ? 'downloads global; revenue collection scope; do not compute cross-scope RPD' : 'same Diandian product collection scope',
  };
});

writeCsv(summaryPath, summaries, [
  'product_family', 'source_launch_month', 'visible_start_month', 'visible_end_month', 'visible_month_count',
  'download_month_count', 'revenue_month_count', 'download_total_visible', 'download_peak_month', 'download_peak',
  'latest_downloads', 'revenue_total_visible_usd', 'revenue_peak_month', 'revenue_peak_usd', 'latest_revenue_usd',
  'latest_download_vs_peak', 'latest_revenue_vs_peak', 'scope_note',
]);

console.log(JSON.stringify({ outPath, summaryPath, rows: output.length, summaries: summaries.length }, null, 2));
