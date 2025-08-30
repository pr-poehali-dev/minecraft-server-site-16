import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Index() {
  // Моковые данные статистики
  const serverStats = {
    onlinePlayers: 247,
    maxPlayers: 1000,
    uptime: "15 дней",
    version: "1.20.1",
    tps: 19.8
  };

  const playerStats = [
    { name: "Steve_Miner", playtime: "156 часов", level: 87, status: "online" },
    { name: "Alex_Builder", playtime: "203 часа", level: 92, status: "online" },
    { name: "Enderman_Killer", playtime: "89 часов", level: 45, status: "offline" },
    { name: "Diamond_Hunter", playtime: "134 часа", level: 67, status: "online" }
  ];

  const rules = [
    "🚫 Запрет на гриферство и воровство",
    "🤝 Уважение к другим игрокам",
    "🏗️ Не строить рядом с чужими постройками",
    "💬 Запрет на спам в чате",
    "⚡ Использование читов карается баном",
    "🔧 Не дюпать предметы",
    "🎮 Играть честно и получать удовольствие!"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <nav className="minecraft-card mx-4 mt-4 p-4">
        <div className="flex items-center justify-between">
          <h1 className="minecraft-font text-2xl text-primary">MINECRAFT SERVER</h1>
          <div className="flex gap-4">
            <Button className="minecraft-button minecraft-font text-xs">Главная</Button>
            <Button variant="outline" className="minecraft-button minecraft-font text-xs">Правила</Button>
            <Button variant="outline" className="minecraft-button minecraft-font text-xs">Сервер</Button>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section className="mx-4 mt-6">
        <Card className="minecraft-card bg-gradient-to-br from-minecraft-grass to-minecraft-dirt text-white overflow-hidden">
          <CardContent className="p-8 text-center">
            <h2 className="minecraft-font text-4xl mb-4">🎮 ДОБРО ПОЖАЛОВАТЬ НА СЕРВЕР!</h2>
            <p className="text-xl mb-6">Лучший выживание сервер в Minecraft</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="minecraft-button minecraft-font bg-accent text-accent-foreground hover:bg-accent/90">
                <Icon name="Play" className="mr-2" size={16} />
                ИГРАТЬ
              </Button>
              <Button size="lg" variant="outline" className="minecraft-button minecraft-font border-white text-white hover:bg-white/10">
                <Icon name="Users" className="mr-2" size={16} />
                ДИСКОРД
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Статистика сервера */}
      <section className="mx-4 mt-6">
        <h3 className="minecraft-font text-xl mb-4 text-primary">📊 СТАТИСТИКА СЕРВЕРА</h3>
        <div className="stats-grid">
          <Card className="minecraft-card">
            <CardHeader>
              <CardTitle className="minecraft-font text-sm text-primary">ИГРОКИ ОНЛАЙН</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{serverStats.onlinePlayers}/{serverStats.maxPlayers}</div>
              <Progress value={(serverStats.onlinePlayers / serverStats.maxPlayers) * 100} className="mb-2" />
              <p className="text-sm text-muted-foreground">Загруженность: {Math.round((serverStats.onlinePlayers / serverStats.maxPlayers) * 100)}%</p>
            </CardContent>
          </Card>

          <Card className="minecraft-card">
            <CardHeader>
              <CardTitle className="minecraft-font text-sm text-primary">АПТАЙМ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-minecraft-grass">{serverStats.uptime}</div>
              <p className="text-sm text-muted-foreground">Сервер работает стабильно</p>
            </CardContent>
          </Card>

          <Card className="minecraft-card">
            <CardHeader>
              <CardTitle className="minecraft-font text-sm text-primary">ВЕРСИЯ</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="minecraft-font text-xs">{serverStats.version}</Badge>
              <p className="text-sm text-muted-foreground mt-2">Последняя версия</p>
            </CardContent>
          </Card>

          <Card className="minecraft-card">
            <CardHeader>
              <CardTitle className="minecraft-font text-sm text-primary">TPS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-minecraft-grass">{serverStats.tps}</div>
              <p className="text-sm text-muted-foreground">Отличная производительность</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Табы с контентом */}
      <section className="mx-4 mt-6 mb-6">
        <Tabs defaultValue="players" className="w-full">
          <TabsList className="grid w-full grid-cols-2 minecraft-card">
            <TabsTrigger value="players" className="minecraft-font text-xs">ТОП ИГРОКИ</TabsTrigger>
            <TabsTrigger value="rules" className="minecraft-font text-xs">ПРАВИЛА</TabsTrigger>
          </TabsList>
          
          <TabsContent value="players" className="mt-4">
            <Card className="minecraft-card">
              <CardHeader>
                <CardTitle className="minecraft-font text-primary">🏆 ЛУЧШИЕ ИГРОКИ</CardTitle>
                <CardDescription>Самые активные игроки сервера</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {playerStats.map((player, index) => (
                    <div key={player.name} className="flex items-center justify-between p-3 bg-muted rounded border-2 border-border">
                      <div className="flex items-center gap-3">
                        <span className="minecraft-font text-lg text-accent">#{index + 1}</span>
                        <div>
                          <p className="font-semibold">{player.name}</p>
                          <p className="text-sm text-muted-foreground">Время игры: {player.playtime}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="minecraft-font text-xs">LVL {player.level}</Badge>
                        <Badge 
                          className={`minecraft-font text-xs ${
                            player.status === 'online' ? 'bg-minecraft-grass text-white' : 'bg-muted'
                          }`}
                        >
                          {player.status === 'online' ? '🟢 ОНЛАЙН' : '⚫ ОФЛАЙН'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="mt-4">
            <Card className="minecraft-card">
              <CardHeader>
                <CardTitle className="minecraft-font text-primary">📜 ПРАВИЛА СЕРВЕРА</CardTitle>
                <CardDescription>Соблюдайте правила для комфортной игры всех</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {rules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded border-2 border-border">
                      <span className="minecraft-font text-accent text-sm">#{index + 1}</span>
                      <p className="text-sm">{rule}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-destructive/10 border-2 border-destructive rounded">
                  <p className="minecraft-font text-xs text-destructive mb-2">⚠️ ВАЖНО!</p>
                  <p className="text-sm">За нарушение правил следует предупреждение, мут или бан в зависимости от серьезности нарушения.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Подключение к серверу */}
      <section className="mx-4 mb-8">
        <Card className="minecraft-card bg-gradient-to-r from-minecraft-diamond to-minecraft-water text-white">
          <CardContent className="p-6 text-center">
            <h3 className="minecraft-font text-xl mb-4">🔗 ПОДКЛЮЧИТЬСЯ К СЕРВЕРУ</h3>
            <div className="bg-black/30 p-4 rounded border-2 border-white/20 mb-4">
              <p className="minecraft-font text-sm">IP: play.minecraft-server.ru</p>
              <p className="minecraft-font text-sm">Порт: 25565</p>
            </div>
            <p className="text-sm opacity-90">Скопируйте IP адрес и добавьте сервер в свой Minecraft</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}