import '../css/BoxMain.css'
import TitleMain from '../TitleMain.jsx'
import Navbar from '../Navbar.jsx'
import '../css/BoxSub.css'
import TitleSub from '../TitleSub.jsx'
import TitleSection from '../TitleSection.jsx'
import Paragraph from '../Paragraph.jsx'
import End from '../End.jsx'


function HomePage(){
  const p1 = `I made Living Ground Up to share my views on what
					constitutes healthy living and build a community that can
					engage with this topic.`;
  const p2 = `Overall, this site is split between two ideas: how people
					can achieve peace of mind and genuine joy.`;

  const p3 = `In my view, people's default state is contentment. When
					life's problems bare their fangs, you move from a state of
					contentment to a state of panic/fear/anxiety/etc. If these
					problems become long-term, your life is tainted with
					negative undertones. You may enjoy yourself temporarily, but
					when those positive feelings are gone you are return to that
					negative base state.`;
  const p4 = `I think there is a place for philosophy/religion/life
					perspective in dealing with life's problems, but I honestly
					can't say whether they give true peace. I see them as ways
					to understand the world better, but at the end of the day a
					problem is still a problem - the only way to 100% get rid of
					a problem is to address it.`;
  const p5 = `That is why I believe safety nets are so important to
					overall well-being.`;
  const p6 = `A safety net means you are aren't living precariously and
					can stand on your own feet without someone else's help. It
					means stability and disaster protection.`;

  const p7 = `From my very limited life of 22 years, I think joy comes
					from a few items. multiple levels of social connections,
					cultivating the body/mind/spirit, dedication to a craft,
					spontaneity, and an appreciation of the natural world.`;
  const p8 = `While these ideas may seem arbitrarily chosen and the list
					not exhaustive, I can remember these moments in my life
					characterized by immense joy.`;
  const p9 = `I believe this kind of genuine joy is the next natural
					step once someone has peace of mind`;
  
  const p10 = `Not too long ago I was developing a website called "Solar
					Media", named as a play of the growing "Solarpunk" movement.
					The website was designed to foster a community of Solarpunk
					enthusiasts and share how we can reach that vision. As a
					quick brief, "Solarpunk" can be loosely defined as a vision
					for future that centers around using sustainable technology,
					living in harmony with nature, and stronger communities.`;
  const p11 = `It should also be noted that there isn't a single formal
					definition of Solarpunk. In fact, I believe a lot of
					Solarpunk's value isn't in the specifics of what it stands
					for but rather how it motivates people to push for a future
					they want to see.`;
  const p12 = `As I coded Solar Media's website I realized I didn't care so
					much about Solarpunk. Instead, I cared about how Solarpunk's
					ideas could protect and bring joy in people's lives.`;
  const p13 = `Understanding this, I am developing this site to focus my
					efforts towards what I truly care about - peace of mind and
					genuine joy.`;

  return (
    <>
      <div className="BoxMain">
        
        <TitleMain />
        <Navbar />
        <div className="BoxSub">
          <TitleSub title='Welcome!' />
          <TitleSection title='What is "Living Ground Up"?' />
          <Paragraph para={p1} />
          <Paragraph para={p2} />
          <TitleSection title='Peace of Mind' />
          <Paragraph para={p3} />
          <Paragraph para={p4} />
          <Paragraph para={p5} />
          <Paragraph para={p6} />
          <TitleSection title='Genuine Joy' />
          <Paragraph para={p7} />
          <Paragraph para={p8} />
          <Paragraph para={p9} />
          <TitleSection title='How I started this site' />
          <Paragraph para={p10} />
          <Paragraph para={p11} />
          <span><b>I encourage you to check it out for yourself - you may like what you find!</b></span>
          <Paragraph para={p12} />
          <Paragraph para={p13} />
        </div>
        <End />

      </div>
    </>
  )

}

export default HomePage