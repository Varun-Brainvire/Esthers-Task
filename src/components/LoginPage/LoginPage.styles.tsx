import colors from "@/theme";
import Link from "next/link";
import styled from "styled-components";

export const ForgotPasswordLink = styled(Link)`
    text-decoration-line: underline;
    color: ${colors.color.grey};
    font-size: 14px;
`