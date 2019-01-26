module.exports = member => {
  let guild = member.guild;
  member.send('KılıçAy™/Transport Ailesinden Ayrıldınız. Kendine iyi bak, GÖRÜŞÜRÜZ...
Bnlik baska bir sey var mi');
  guild.defaultChannel.sendMessage(`${member.user.username} gitti.`);
};
