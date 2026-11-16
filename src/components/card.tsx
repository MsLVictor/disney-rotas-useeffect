import { Box } from "@mui/material";
import type { CharatersProps } from "../types/character";

const Card = ({ _id, name, imageUrl }: CharatersProps) => {
  return (
    <Box key={_id} sx={{ backgroundColor: "#1a1a2e", borderRadius: "12px", padding: "1rem", width: 200, textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.5)", transition: "transform 0.2s", cursor: "pointer", "&:hover": { transform: "scale(1.05)" },}} >
      <img src={imageUrl} alt={name} style={{ width: "100%", borderRadius: 8, aspectRatio: "3 / 4", objectFit: "cover"}} />
      <h3 style={{ marginTop: "0.5rem", color: "#1f80e0" }}>{name}</h3>
    </Box>
  );
};

export default Card;
