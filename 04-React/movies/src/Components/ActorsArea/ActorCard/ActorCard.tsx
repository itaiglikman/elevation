import { Card, CardSection, Image, Text } from "@mantine/core";
import "./ActorCard.css";

interface ActorCardProps {
    actor: any;
}

export function ActorCard({ actor }: ActorCardProps) {
    return (
        <div className="ActorCard">

            <Card className="card" shadow="sm" padding="lg" radius="md" withBorder w='300px'>
                {/* <CardSection>
                    <Text>{actor.name}</Text>
                </CardSection> */}
                <CardSection>
                    <Image
                        src={`https://image.tmdb.org/t/p/w400${actor.profile_path}`} />
                </CardSection>
            </Card>

        </div>
    );
}
