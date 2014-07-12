// various settings for the rendering, to be modified by user

/*
This function takes a raw window title w as string
and outputs a more compact code, to be treated as a single
unit during rendering. Every single possibility output from
this function will have its own row and its own analysis,
so it is recommended that only few possible outputs exist,
and use of MISC category as shown in example is encouraged.
*/

var mapwin_patterns = [
  [/mail\.google\.com/, 'Gmail'],
  [/facebook\.com/, 'Facebook'],
  [/reddit\.com/, 'Reddit'],
  [/quora\.com/, 'Quora'],
  [/news\.ycombinator\.com/, 'Hacker News'],
  [/MacVim/, 'MacVim'],
  [/Google Chrome/, 'Google Chrome'],
  [/__LOCKEDSCREEN/, 'Locked Screen'],
  [/loginwindow/, 'Locked Screen'],
  [/Terminal/, 'Terminal'],
  [/Finder/, 'Finder'],
];

var display_groups = [
  ["Reddit", "Facebook", "Hacker News", "Quora"], // Time wasters
  ["Google Chrome", "Gmail"], // Other internet stuff
  ["Matlab", "MacVim", "Terminal"], // Coding stuff
  ["Locked Screen"],
];

// list of titles that classify as "hacking", or being productive in general
// the main goal of the day is to get a lot of focused sessions of hacking
// done throughout the day. Windows that arent in this list do not
// classify as hacking, and they break "streaks" (events of focused hacking)
// the implementation is currently quite hacky, experimental and contains 
// many magic numbers.
var hacking_titles = ["INotebook", "Terminal", "Matlab", "SubText2 Coding", "MacVim"];
var draw_hacking = true; // by default turning this off

// Input a String containing an app name and window title, and output a nice name.
// By default this just matches the provided name against the patterns defined above.
function mapwin(w) {
  for (var i = 0; i < mapwin_patterns.length; i++) {
    var pattern = mapwin_patterns[i][0];
    var name = mapwin_patterns[i][1];
    var res = w.match(pattern);
    if (res !== null) {
      return mapwin_patterns[i][1];
    }
  }
  return 'MISC';
}

// draw notes row?
var draw_notes = true;

// experimental coffee levels indicator :)
// looks for notes that mention coffee and shows 
// levels of coffee in body over time
var draw_coffee = false;
