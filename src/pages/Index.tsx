import { BookOpen, GraduationCap, Headphones, BookMarked, Film, Palette, Video, FileText, Zap } from "lucide-react";
import AccessCard from "@/components/AccessCard";
import logo from "@/assets/logo.png";
import book1 from "@/assets/book1.webp";
import book2 from "@/assets/book2.webp";
import book3 from "@/assets/book3.png";
import book4 from "@/assets/book4.webp";
import book5 from "@/assets/book5.webp";
import book6 from "@/assets/book6.webp";
import book7 from "@/assets/book7.webp";
import book8 from "@/assets/book8.webp";
import book9 from "@/assets/book9.webp";
import book10 from "@/assets/book10.webp";

const Index = () => {
  const accessItems = [
    {
      icon: BookOpen,
      title: "ACESSO OFICIAL E VITALÍCIO – 50 MIL LIVROS",
      description: "Biblioteca completa com milhares de títulos",
      link: "https://drive.google.com/drive/folders/1ylrXdI_TyORQtkinHAp8T5ZbwICOP8B3",
      iconColor: "text-primary"
    },
    {
      icon: GraduationCap,
      title: "20 MIL CURSOS (Presente Especial)",
      description: "Cursos completos sobre os mais variados temas",
      link: "https://mega.nz/folder/6fxBRSDD#3v-snDKSjlvpovuYpLyhYg",
      iconColor: "text-secondary"
    },
    {
      icon: Zap,
      title: "Como Ler Rápido e Interpretar Melhor",
      description: "Técnicas para melhorar sua leitura",
      link: "https://drive.google.com/drive/folders/1N-trluOJIJuxtyaU6jdjaJAanrDTShfD",
      iconColor: "text-accent"
    },
    {
      icon: Headphones,
      title: "1.000 Audiobooks Exclusivos",
      description: "Ouça seus livros favoritos onde quiser",
      link: "https://drive.google.com/drive/folders/1o9gj7Nxr9USR2irxKvx3g3dOKjuiSEED",
      iconColor: "text-primary"
    },
    {
      icon: BookMarked,
      title: "+2.000 Livros Bíblicos",
      description: "Coleção completa de literatura bíblica",
      link: "https://drive.google.com/drive/folders/1OUMEdc_GbECsw7SU4o6ja2GxhbQnCVDK",
      iconColor: "text-secondary"
    },
    {
      icon: Film,
      title: "10.000 Cortes de Filmes e Séries",
      description: "Conteúdo pronto para uso em redes sociais",
      link: "https://drive.google.com/drive/folders/1BxIvXI5bEp5u_t6Dff17YAkqI_Qzl7kq",
      iconColor: "text-accent"
    },
    {
      icon: Palette,
      title: "Artes Editáveis",
      description: "Templates profissionais para suas criações",
      link: "https://drive.google.com/file/d/1wn0oPvQ8hiftSwBmLSP7_efv-p9OMEbi/view",
      iconColor: "text-primary"
    },
    {
      icon: Video,
      title: "Curso de Edição de Vídeo",
      description: "Aprenda a editar vídeos profissionalmente",
      link: "https://drive.google.com/drive/folders/1iYvgAaFkZjHkBUAlilk__aSr6Y_Gnvk6",
      iconColor: "text-secondary"
    },
    {
      icon: FileText,
      title: "Material para Concurseiros",
      description: "Conteúdo completo para sua aprovação",
      link: "https://drive.google.com/drive/folders/1y77LqnDnHt4mgw2dkg1AqqMIx1czv-Jg",
      iconColor: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-foreground py-12 px-4 sm:py-16">
        {/* Book Covers Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4 p-4">
            {[book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book1, book2, book3, book4, book5].map((book, idx) => (
              <img 
                key={idx}
                src={book} 
                alt="" 
                className="w-full h-32 object-cover rounded shadow-lg"
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
      <main className="container mx-auto px-4 py-12 sm:py-16 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {accessItems.map((item, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccessCard {...item} />
            </div>
          ))}
        </div>
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
