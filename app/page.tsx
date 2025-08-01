import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Scissors, Droplets, Sparkles, Phone, MapPin, Clock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BanhoETosaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Banho e Tosa
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#servicos" className="text-purple-700 hover:text-pink-600 transition-colors">
                Serviços
              </Link>
              <Link href="#galeria" className="text-purple-700 hover:text-pink-600 transition-colors">
                Galeria
              </Link>
              <Link href="#sobre" className="text-purple-700 hover:text-pink-600 transition-colors">
                Sobre Nós
              </Link>
              <Link href="#contato" className="text-purple-700 hover:text-pink-600 transition-colors">
                Contato
              </Link>
            </nav>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Agendar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
              ✨ Cuidado especial para seu melhor amigo
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Seu Pet Merece o Melhor Cuidado
            </h2>
            <p className="text-xl text-purple-700 mb-8 leading-relaxed">
              Oferecemos serviços de banho e tosa com muito amor e carinho. Seu companheiro sairá daqui limpinho,
              cheiroso e ainda mais bonito!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-3"
              >
                Agendar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8 py-3 bg-transparent"
              >
                Ver Preços
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Cachorro fofo tomando banho"
                width={600}
                height={400}
                className="rounded-2xl mx-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-purple-800">Nossos Serviços</h3>
            <p className="text-xl text-purple-600 max-w-2xl mx-auto">
              Cuidamos do seu pet com todo carinho e profissionalismo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-purple-800">Banho Completo</h4>
                <p className="text-purple-600 mb-4">Banho com produtos especiais, secagem e perfume</p>
                <p className="text-2xl font-bold text-pink-600">A partir de R$ 35</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-pink-400 to-purple-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scissors className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-purple-800">Tosa Higiênica</h4>
                <p className="text-purple-600 mb-4">Corte das unhas, limpeza de ouvidos e tosa higiênica</p>
                <p className="text-2xl font-bold text-pink-600">A partir de R$ 25</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-purple-800">Tosa Completa</h4>
                <p className="text-purple-600 mb-4">Corte personalizado conforme a raça do seu pet</p>
                <p className="text-2xl font-bold text-pink-600">A partir de R$ 50</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-pink-400 to-purple-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-purple-800">Pacote Completo</h4>
                <p className="text-purple-600 mb-4">Banho + tosa + hidratação + perfume</p>
                <p className="text-2xl font-bold text-pink-600">A partir de R$ 70</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-purple-800">Nossos Clientes Especiais</h3>
            <p className="text-xl text-purple-600 max-w-2xl mx-auto">
              Veja alguns dos nossos amiguinhos que já passaram por aqui
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Poodle após tosa"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-purple-800">Mel - Poodle</h4>
                <p className="text-purple-600 text-sm">Tosa completa + banho</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Labrador após banho"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-purple-800">Thor - Labrador</h4>
                <p className="text-purple-600 text-sm">Banho completo</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Yorkshire após tosa"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-purple-800">Luna - Yorkshire</h4>
                <p className="text-purple-600 text-sm">Tosa higiênica</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Shih Tzu com laço"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-purple-800">Buddy - Shih Tzu</h4>
                <p className="text-purple-600 text-sm">Pacote completo</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Golden Retriever filhote"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-purple-800">Bella - Golden</h4>
                <p className="text-purple-600 text-sm">Banho de filhote</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Maltês com laço rosa"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-purple-800">Princesa - Maltês</h4>
                <p className="text-purple-600 text-sm">Tosa completa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-purple-800">Por que nos escolher?</h3>
              <p className="text-lg text-purple-600 mb-8 leading-relaxed">
                Há mais de 10 anos cuidando dos pets com muito amor e carinho. Nossa equipe é especializada e apaixonada
                por animais.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-full flex-shrink-0">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-1">Cuidado com Amor</h4>
                    <p className="text-purple-600">Tratamos cada pet como se fosse nosso próprio filho</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-full flex-shrink-0">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-1">Profissionais Qualificados</h4>
                    <p className="text-purple-600">Equipe treinada e com experiência em todas as raças</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-full flex-shrink-0">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-1">Produtos de Qualidade</h4>
                    <p className="text-purple-600">Utilizamos apenas produtos premium e seguros</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Profissional cuidando de pets"
                width={500}
                height={500}
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-purple-800">Entre em Contato</h3>
            <p className="text-xl text-purple-600 max-w-2xl mx-auto">Agende já o cuidado especial que seu pet merece</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 text-center">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-purple-800">Telefone</h4>
                <p className="text-purple-600 mb-4">(11) 99999-9999</p>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 text-center">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-pink-400 to-purple-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-purple-800">Endereço</h4>
                <p className="text-purple-600 mb-4">
                  Rua dos Pets, 123
                  <br />
                  Centro - São Paulo
                </p>
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
                >
                  Ver no Mapa
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 text-center">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-purple-800">Horário</h4>
                <p className="text-purple-600 mb-4">
                  Segunda a Sábado
                  <br />
                  8h às 18h
                </p>
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
                >
                  Agendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-white/20 p-2 rounded-full">
              <Heart className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold">Banho e Tosa</h1>
          </div>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Cuidando do seu melhor amigo com todo amor e carinho que ele merece. Seu pet sempre feliz e bem cuidado!
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="#servicos" className="text-purple-200 hover:text-white transition-colors">
              Serviços
            </Link>
            <Link href="#galeria" className="text-purple-200 hover:text-white transition-colors">
              Galeria
            </Link>
            <Link href="#sobre" className="text-purple-200 hover:text-white transition-colors">
              Sobre Nós
            </Link>
            <Link href="#contato" className="text-purple-200 hover:text-white transition-colors">
              Contato
            </Link>
          </div>
          <div className="border-t border-purple-600 pt-6">
            <p className="text-purple-200">© 2024 Banho e Tosa. Feito com ❤️ para seu pet.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
