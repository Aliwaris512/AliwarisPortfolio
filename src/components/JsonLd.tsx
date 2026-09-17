type Schema =
    | Record<string, unknown>
    | Array<Record<string, unknown>>;

interface JsonLdProps {
    schema: Schema;
    id?: string;
}

export default function JsonLd({ schema, id = "schema-json" }: JsonLdProps) {
    return (
        <script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    );
}
