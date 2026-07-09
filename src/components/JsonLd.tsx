import Script from "next/script";

type Schema =
    | Record<string, unknown>
    | Array<Record<string, unknown>>;

interface JsonLdProps {
    schema: Schema;
    id?: string;
}

export default function JsonLd({ schema, id = "schema-json" }: JsonLdProps) {
    return (
        <Script id={id} type="application/ld+json">
            {JSON.stringify(schema)}
        </Script>
    );
}
