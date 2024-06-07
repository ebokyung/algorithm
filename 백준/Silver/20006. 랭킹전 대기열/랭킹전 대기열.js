let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [p, m] = input[0].split(' ').map(i => +i);
const list = input.slice(1).map(i => i.split(' '));

const rooms = [];

for (let i = 0; i < p; i++) {
  const [level, name] = [parseInt(list[i][0]), list[i][1]];
  let matched = false;

  for (let j = 0; j < rooms.length; j++) {
    if (rooms[j].started === 1 || rooms[j].players.length === m) continue;
    const roomLevel = rooms[j].level;
    if (roomLevel - 10 <= level && level <= roomLevel + 10) {
      rooms[j].players.push([level, name]);
      matched = true;
      if (rooms[j].players.length === m) {
        rooms[j].started = 1;
      }
      break;
    }
  }

  if (!matched) {
    rooms.push({
      started: m === 1 ? 1 : 0,
      level: level,
      players: [[level, name]]
    });
  }
}

let answer = '';
for (let i = 0; i < rooms.length; i++) {
  answer += (rooms[i].started === 1 ? 'Started!' : 'Waiting!') + '\n';
  const sortedPlayers = [...rooms[i].players].sort((a, b) => a[1].localeCompare(b[1]));
  sortedPlayers.forEach(p => answer += p[0] + ' ' + p[1] + '\n');
}
console.log(answer);