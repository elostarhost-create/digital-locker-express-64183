import { BookOpen, GraduationCap, Headphones, BookMarked, Film, Palette, Video, FileText, Zap } from "lucide-react";
import AccessCard from "@/components/AccessCard";
import logo from "@/assets/logo.png";
import book11 from "@/assets/book11.webp";
import book13 from "@/assets/book13.webp";
import book14 from "@/assets/book14.webp";
import book15 from "@/assets/book15.webp";
import book16 from "@/assets/book16.webp";
import book17 from "@/assets/book17.webp";
import book18 from "@/assets/book18.webp";
import book19 from "@/assets/book19.webp";
import book20 from "@/assets/book20.webp";
import book21 from "@/assets/book21.webp";

const Index = () => {
  const mainProduct = [
    {
      icon: Headphones,
      title: "250 AUDIOBOOKS",
      description: "Coleção exclusiva de audiobooks de alta qualidade",
      link: "https://drive.google.com/drive/folders/1-6gsrxIJVE9k4eEBVSWEnloFKZQ56_ap",
      iconColor: "text-primary"
    }
  ];

  const bonus = [
    {
      icon: BookOpen,
      title: "3500 Livros Digitais",
      description: "Biblioteca completa com milhares de títulos",
      link: "https://drive.google.com/drive/folders/1N-trluOJIJuxtyaU6jdjaJAanrDTShfD",
      iconColor: "text-secondary"
    }
  ];

  const extras = [
    {
      icon: Zap,
      title: "Como Ler Rápido e Interpretar Melhor",
      description: "Técnicas para melhorar sua leitura",
      link: "https://drive.google.com/drive/folders/1N-trluOJIJuxtyaU6jdjaJAanrDTShfD",
      iconColor: "text-accent"
    },
    {
      icon: BookOpen,
      title: "Pacotão 20.000 Livros Digitais",
      description: "Biblioteca completa com milhares de títulos",
      link: "https://drive.google.com/drive/folders/1ylrXdI_TyORQtkinHAp8T5ZbwICOP8B3",
      iconColor: "text-primary"
    },
    {
      icon: Headphones,
      title: "Acesso Imediato a 1000 Áudio-Livros de Alta Performance",
      description: "Ouça seus livros favoritos onde quiser",
      link: "https://drive.google.com/drive/folders/1o9gj7Nxr9USR2irxKvx3g3dOKjuiSEED",
      iconColor: "text-secondary"
    }
  ];

  const gifts = [
    {
      icon: GraduationCap,
      title: "20 MIL CURSOS",
      description: "Cursos completos sobre os mais variados temas",
      link: "https://mega.nz/folder/6fxBRSDD#3v-snDKSjlvpovuYpLyhYg",
      iconColor: "text-accent"
    },
    {
      icon: BookMarked,
      title: "+2.000 Livros Bíblicos",
      description: "Coleção completa de literatura bíblica",
      link: "https://drive.google.com/drive/folders/1OUMEdc_GbECsw7SU4o6ja2GxhbQnCVDK",
      iconColor: "text-primary"
    },
    {
      icon: Film,
      title: "10.000 Cortes de Filmes e Séries",
      description: "Conteúdo pronto para uso em redes sociais",
      link: "https://drive.google.com/drive/folders/1BxIvXI5bEp5u_t6Dff17YAkqI_Qzl7kq",
      iconColor: "text-secondary"
    },
    {
      icon: Palette,
      title: "Artes Editáveis",
      description: "Templates profissionais para suas criações",
      link: "https://drive.google.com/file/d/1wn0oPvQ8hiftSwBmLSP7_efv-p9OMEbi/view",
      iconColor: "text-accent"
    },
    {
      icon: Video,
      title: "Curso de Edição de Vídeo",
      description: "Aprenda a editar vídeos profissionalmente",
      link: "https://drive.google.com/drive/folders/1iYvgAaFkZjHkBUAlilk__aSr6Y_Gnvk6",
      iconColor: "text-primary"
    },
    {
      icon: FileText,
      title: "Material para Concurseiros",
      description: "Conteúdo completo para sua aprovação",
      link: "https://drive.google.com/drive/folders/1y77LqnDnHt4mgw2dkg1AqqMIx1czv-Jg",
      iconColor: "text-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-foreground py-12 px-4 sm:py-16">
        {/* Book Covers Background - Messy Layout */}
        <div className="absolute inset-0 opacity-30">
          <div className="relative w-full h-full">
            {[
              { src: book11, top: '5%', left: '2%', rotate: '-8deg', scale: 0.9 },
              { src: book13, top: '15%', left: '15%', rotate: '12deg', scale: 1.1 },
              { src: book14, top: '8%', left: '28%', rotate: '-5deg', scale: 0.95 },
              { src: book15, top: '20%', left: '42%', rotate: '7deg', scale: 1.05 },
              { src: book16, top: '10%', left: '55%', rotate: '-10deg', scale: 0.85 },
              { src: book17, top: '18%', left: '68%', rotate: '15deg', scale: 1 },
              { src: book18, top: '5%', left: '80%', rotate: '-12deg', scale: 0.9 },
              { src: book19, top: '50%', left: '5%', rotate: '9deg', scale: 1.05 },
              { src: book20, top: '55%', left: '20%', rotate: '-7deg', scale: 0.95 },
              { src: book21, top: '48%', left: '35%', rotate: '11deg', scale: 1 },
              { src: book11, top: '60%', left: '50%', rotate: '-15deg', scale: 0.9 },
              { src: book13, top: '52%', left: '65%', rotate: '6deg', scale: 1.1 },
              { src: book14, top: '58%', left: '78%', rotate: '-9deg', scale: 0.85 },
              { src: book15, top: '35%', left: '10%', rotate: '13deg', scale: 0.95 },
              { src: book16, top: '38%', left: '25%', rotate: '-11deg', scale: 1.05 },
              { src: book17, top: '32%', left: '72%', rotate: '8deg', scale: 0.9 },
              { src: book18, top: '42%', left: '88%', rotate: '-6deg', scale: 1 },
              { src: book19, top: '75%', left: '8%', rotate: '10deg', scale: 0.95 },
              { src: book20, top: '78%', left: '30%', rotate: '-13deg', scale: 1.05 },
              { src: book21, top: '72%', left: '55%', rotate: '7deg', scale: 0.9 },
            ].map((book, idx) => (
              <img 
                key={idx}
                src={book.src} 
                alt="" 
                className="absolute w-32 h-48 object-cover rounded shadow-2xl"
                style={{
                  top: book.top,
                  left: book.left,
                  transform: `rotate(${book.rotate}) scale(${book.scale})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Overlay gradiente para melhor legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/90 to-foreground"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="flex flex-col items-center space-y-6">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-fade-in drop-shadow-2xl"
            />
            
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Área de Acessos Exclusivos
              </h1>
              
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                Aqui estão todos os materiais e bônus inclusos no seu pacote. Aproveite!
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content Grid */}
      <main className="container mx-auto px-4 py-12 sm:py-16 max-w-7xl space-y-16">
        {/* Produto Principal */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            🎯 Produto Principal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mainProduct.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccessCard {...item} />
              </div>
            ))}
          </div>
        </section>

        {/* Bônus */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            🎁 Bônus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {bonus.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccessCard {...item} />
              </div>
            ))}
          </div>
        </section>

        {/* Produtos Extras */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            ⭐ Produtos Extras
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {extras.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccessCard {...item} />
              </div>
            ))}
          </div>
        </section>

        {/* Presentes */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            🎉 Presentes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gifts.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccessCard {...item} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 px-4 mt-12">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">
            Todos os acessos são vitalícios e estão disponíveis imediatamente. 
            <br className="hidden sm:block" />
            Em caso de dúvidas, entre em contato com nosso suporte.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
