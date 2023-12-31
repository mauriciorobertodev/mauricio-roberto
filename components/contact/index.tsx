import { siteConfig } from '@/config/site';
import { MacWindowBar } from '../mac-window-bar';
import { ContactForm } from './contact-form';
import { ContactSocialLink } from './social';

export function Contact() {
    return (
        <section id="contato" className="px-4">
            <div className="container px-0 pt-10 border-t md:mx-auto md:pt-20">
                <div className="flex flex-col w-full gap-8 mx-auto text-left md:max-w-6xl">
                    {/* text */}
                    <div className="col-span-1 row-span-1">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                            Vamos trabalhar juntos ?
                        </h2>
                        <p className="leading-relaxed md:text-lg text-muted-foreground">
                            Fique à vontade para entrar em contato comigo para discutir
                            oportunidades, freelance ou apenas para trocar ideias! Estou sempre
                            aberto a novas conexões e experiências.
                        </p>
                    </div>
                    {/* form */}
                    <div className="relative w-full col-span-1 row-span-1 mx-auto">
                        <div className="absolute w-full h-full bg-main/10 blur-xl -z-10 "></div>
                        <div>
                            <MacWindowBar url="para: Mauricio Roberto" className="z-10 " />
                            <div className="flex flex-col items-center justify-center w-full gap-8 px-4 py-8 md:pt-20 md:pb-20 bg-background">
                                <ContactForm />
                                {/* social */}
                                <div className="flex flex-wrap w-full gap-2 md:justify-center">
                                    <ContactSocialLink
                                        icon="github"
                                        text="Github"
                                        href={siteConfig.links.github}
                                    />
                                    <ContactSocialLink
                                        icon="whatsapp"
                                        text="Whatsapp"
                                        href={siteConfig.links.whatsapp}
                                    />
                                    <ContactSocialLink
                                        icon="Youtube"
                                        text="Youtube"
                                        href={siteConfig.links.youtube}
                                    />
                                    <ContactSocialLink
                                        icon="discord"
                                        text="Discord"
                                        href={siteConfig.links.discord}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
