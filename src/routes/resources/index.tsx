import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {

  return (
    <section class="flex mx-auto max-w-7xl px-6 sm:items-center justify-center min-h-[calc(100lvh-68px)]">
      <div class="my-10 min-h-[60px] text-2xl">
        <Box
          title="Miscellaneous tools"
          description="These are just tools to help with random miscellaneous things."
          listItems={[
            'Animated Textures: Easily merge textures for resource pack animations',
            'Color Code Stripper: Strips all color / format codes from text',
            'Preset Tools: This will update older preset versions to the newest version',
          ]}
          links={[
            { url: '/animtexture', text: 'Animated Textures' },
            { url: '/colorstrip', text: 'Color Code Stripper' },
            { url: '/presettools', text: 'Preset Tools' },
          ]}
        />
        <Box
          title="Botflop"
          description="Botflop is a Discord bot that watches chat to chime in and provide suggestions. Botflop responds to timings reports by viewing the server's configuration and suggesting potential optimizations. These optimizations will be unique to each timings report and each server. Botflop also uploads all text files to a paste bin for easier readability. No more having to download a config.yml, message.txt, or latest.log."
          listItems={[]}
          links={[
            { url: 'https://github.com/birdflop/botflop', text: 'Learn More' },
            { url: 'https://discord.com/oauth2/authorize?client_id=787929894616825867&permissions=0&scope=bot', text: 'Invite' },
          ]}
        />
        <Box
          title="Binflop"
          description="Binflop is Birdflop's spinoff of the original hastebin.com. Binflop improves upon Hastebin through the following methods:"
          listItems={[
            'Ctrl + A, Ctrl + C no longer copies button text nor line numbers.',
            'Line numbering is correct across all browsers, all zoom settings, and all uploaded files.',
            'Colors are more vibrant and visible.',
            'Functions box no longer conceals part of the first line.',
            'Added a "Hide IPs" button to hide all public IPs.',
            'Links retain their content permanently.',
            'Expanded REST API.',
          ]}
          links={[
            { url: 'https://bin.birdflop.com/', text: 'Try it' },
          ]}
        />
        <Box
          title="BirdTickets"
          description="BirdTickets is a Discord ticket bot which provides premium features without a premium cost."
          listItems={[
            'Create tickets through commands and/or reactions.',
            'Close tickets through commands and/or reactions.',
            'Automatically close tickets if the creator leaves your server.',
            'Automatically close tickets if the creator is inactive.',
            'Automatically send a transcript to the creator upon closure.',
            'Automatically send a transcript to a specified channel upon closure.',
            'Beautiful HTML transcripts.',
            'And more...',
          ]}
          links={[
            { url: 'https://github.com/birdflop/botflop', text: 'Learn More' },
            { url: 'https://discord.com/oauth2/authorize?client_id=787929894616825867&permissions=0&scope=bot', text: 'Invite' },
          ]}
        />
      </div>
    </section>
  );
});

const Box = ({ title, description, listItems, links }: any) => (
  <div class="p-10 bg-blue-500 shadow-md rounded-md mb-10">
    <h1 class="text-5xl text-white font-bold mb-2">{title}</h1>
    <p class="text-white mb-4">{description}</p>
    {listItems.length > 0 && (
      <>
        <br />
        <ul class="list-disc list-inside text-white mb-4">
          {listItems.map((item: string, i: number) => <li key={i}>{item}</li>)}
        </ul>
      </>
    )}
    {links.map((link: { url: string; text: string; }, i: number) =>
      <a key={i} href={link.url} class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">{link.text}</a>,
    )}
  </div>
);

export const head: DocumentHead = {
  title: 'Resources',
  meta: [
    {
      name: 'description',
      content: 'Public resources developed by Birdflop. Birdflop is a registered 501(c)(3) nonprofit Minecraft host aiming to provide affordable and accessible hosting and resources. Check out our plans starting at $2/GB for some of the industry\'s fastest and cheapest servers, or use our free public resources.',
    },
    {
      name: 'og:description',
      content: 'Public resources developed by Birdflop. Birdflop is a registered 501(c)(3) nonprofit Minecraft host aiming to provide affordable and accessible hosting and resources. Check out our plans starting at $2/GB for some of the industry\'s fastest and cheapest servers, or use our free public resources.',
    },
    {
      name: 'og:image',
      content: 'https://simplymc.art/images/icon.png',
    },
  ],
};